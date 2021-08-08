import axios from "axios";

import { url } from "../../App";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_RESET = "CART_RESET";
export const CHANGE_PRODUCT_QTY = "CHANGE_PRODUCT_QTY";
export const LOAD_CART = "LOAD_CART";
export const UPDATE_TOTAL = "UPDATE_TOTAL";
export const FUSION_CART = "FUSION_CART";

export const addToCart = (id, quantity, price) => async (dispatch) => {
  let product = {
    id,
    quantity,
    price,
  };

  let user = JSON.parse(window.localStorage.getItem("storage"));
  let cartId = JSON.parse(window.localStorage.getItem("cartid"));

  try {

    if (user?.uid) {
      let info = { userId: user.uid, products: [{ productId: id, quantity }] }

      if (cartId) {
        await axios.put(url + "/orders/update/" + cartId, info)
      }
      else {
        let res = await axios.post(url + "/orders/create", info)
        window.localStorage.setItem("cartid", JSON.stringify(res.data.cartId))
      }
    }

    else {

      let cart = JSON.parse(localStorage.getItem("cart"));

      if (!cart || !cart.length) {
        quantity = 1;
        localStorage.setItem("cart", JSON.stringify([{ ...product, quantity }]));
      } else {
        let ids = cart.map((e) => e.id);
        if (!ids.includes(id)) {
          quantity = 1;
          cart.push({ ...product, quantity });
        } else {
          for (var item of cart) {
            if (item.id === id) {
              item.quantity = quantity === "add" ? ++item.quantity : quantity;
              item.price = price;
              quantity = item.quantity;
            }
          }
        }

        localStorage.setItem("cart", JSON.stringify(cart));
      }

      dispatch({
        type: ADD_TO_CART,
        payload: JSON.parse(localStorage.getItem("cart")),
      });

    }

  } catch (e) {
    console.log(e);
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {

  try {
    let user = JSON.parse(localStorage.getItem("storage"));

    if (user?.uid) {
      let info = { userId: user.uid, productId: id }
      axios.delete(url + "/orders/delete/product", { data: { ...info } })
    }
    else {
      let cart = getState().cart.items;
      let newCart = cart.filter((e) => e.id !== id);
      dispatch({
        type: REMOVE_FROM_CART,
        payload: newCart,
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  } catch (error) {
    console.log(error)
  }


  //sweetAlert("Eliminado", "success", "OK", 1000);
};

export const cartReset = () => async (dispatch) => {


  let user = JSON.parse(localStorage.getItem("storage"));
  let cartId = JSON.parse(localStorage.getItem("cartid"));

  
  if (user?.uid && cartId) {

    console.log("entro aca wey")
    await axios.delete( url + "/orders/delete/"+cartId)
    window.localStorage.removeItem("cartid")
  }
  else {
    //sweetAlert("Vaciado", "success", "OK", 1000);
    localStorage.removeItem("cart");
  }

  return dispatch({
    type: CART_RESET,
    payload: {
      items: [],
      total: 0
    }
  });
};


export const changeProductQuantity =
  (id, quantity) => async (dispatch, getState) => {

    let user = JSON.parse(localStorage.getItem("storage"));

    if (user?.uid) {
      let cartId = JSON.parse(localStorage.getItem("cartid"));
      let info = { products: [{ productId: id, quantity }] }
      await axios.put(url + "/orders/update/" + cartId, info)
    }
    else {
      let cart = getState().cart.items;
      for (var item of cart) {
        if (item.id === id) {
          item.quantity = quantity;
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

export const loadCart = () =>
  async (dispatch) => {

    let user = JSON.parse(localStorage.getItem("storage"));

    if (user?.uid) {
      let cartId = JSON.parse(localStorage.getItem("cartid"));
      let cart = await axios.get(url + "/orders/" + cartId)
      if(cart.data.orderState !== "CART"){
        let res = await axios.post(url + "/orders/create", {userId:user.uid})
        window.localStorage.setItem("cartid", JSON.stringify(res.data.cartId))
        cart = await axios.get(url + "/orders/" + res.data.cartId)
      }

      cart = cart?.data.products.map(e => {
        return {
          id: e.id,
          name: e.name,
          ...e.Order_Product
        }
      });

      dispatch({
        type: LOAD_CART,
        register: true,
        payload: cart,
      });

    } else {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      dispatch({
        type: LOAD_CART,
        register: false,
        payload: cart,
      });
    }
  };

export const checkout = () => async (dispatch, getState) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  try {
    axios.post("/order/create", { cart });
  } catch (e) {
    console.log(e);
  }
};

export const updateTotal = () => {
  return { type: UPDATE_TOTAL };
};


export const fusionCart = async (id) => {
  try {
    let user = JSON.parse(localStorage.getItem("storage")) || id;
    let products = JSON.parse(localStorage.getItem("cart"));

    if (products) {

      products = products.map(e => {
        return {
          productId: e.id,
          quantity: e.quantity,
        }
      })
    }

    if (user?.uid) {

      if (products?.length > 0) {
        let info = { userId: user.uid, products }
        let res = await axios.post(url + "/orders/create", info)
        if(res.data.status !== "CART"){
          res = await axios.post(url + "/orders/create", {userId:user.uid})
        }
        window.localStorage.setItem("cartid", JSON.stringify(res.data.cartId))
        if (res.data.message === false) {
          await axios.put(url + "/orders/update/" + res.data.cartId, info)
        }
      }
      else {
        let res = await axios.post(url + "/orders/create", { userId: user.uid })
        if(res.data.status !== "CART"){
          res = await axios.post(url + "/orders/create", {userId:user.uid})
        }
        window.localStorage.setItem("cartid", JSON.stringify(res.data.cartId))
      }
      window.localStorage.removeItem("cart")
    }


  } catch (error) {
    console.log("tiro errooooooorrrrrrrrrrrrrrrrr", error)
  }
};










// import axios from "axios";
// import { newUser } from "./userActions";

// import { url } from "../../App";

// export const ADD_TO_CART = "ADD_TO_CART";
// export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// export const CART_RESET = "CART_RESET";
// export const CHANGE_PRODUCT_QTY = "CHANGE_PRODUCT_QTY";
// export const LOAD_CART = "LOAD_CART";
// export const UPDATE_TOTAL = "UPDATE_TOTAL";
// export const FUSION_CART = "FUSION_CART";

// export const addToCart = (id, quantity, price, userId) => async (dispatch) => {
//   let product = {
//     id,
//     quantity,
//     price,
//   };

//   // userId = "d1687b07-058c-414a-bb5a-77a8d897be57";
//   // // RUTA DE ACTUALIZACION AL BACK                                                --------
//   // let info = {userId, productId: id, cantidad final}
//   // if(userId) await axios.put( url + "/order/addOrder", info)     

//   try {
//     let cart = JSON.parse(localStorage.getItem("cart"));

//     if (!cart || !cart.length) {
//       quantity = 1;
//       localStorage.setItem("cart", JSON.stringify([{ ...product, quantity }]));
//     } else {
//       let ids = cart.map((e) => e.id);
//       if (!ids.includes(id)) {
//         quantity = 1;
//         cart.push({ ...product, quantity });
//       } else {
//         for (var item of cart) {
//           if (item.id === id) {
//             item.quantity = quantity === "add" ? ++item.quantity : quantity;
//             item.price = price;
//             quantity = item.quantity;
//           }
//         }
//       }
//       let info = { userId, products:[{productId: id, quantity}]};
//       if (userId) await axios.put(url + "/order/addOrder", info);

//       localStorage.setItem("cart", JSON.stringify(cart));
//     }



//     dispatch({
//       type: ADD_TO_CART,
//       payload: JSON.parse(localStorage.getItem("cart")),
//     });


//     //localStorage.setItem("cart", JSON.stringify(cart));
//     //sweetAlert("Agregado", "success", "OK", 1000);
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const removeFromCart = (id) => async (dispatch, getState) => {
//   let cart = getState().cart.items;
//   let newCart = cart.filter((e) => e.id !== id);
//   dispatch({
//     type: REMOVE_FROM_CART,
//     payload: newCart,
//   });
//   localStorage.setItem("cart", JSON.stringify(newCart));
//   //sweetAlert("Eliminado", "success", "OK", 1000);
// };

// export const cartReset = () => (dispatch) => {
//   dispatch({
//     type: CART_RESET,
//     payload: [],
//   });
//   //sweetAlert("Vaciado", "success", "OK", 1000);
//   localStorage.setItem("cart", "[]");
// };

// export const changeProductQuantity =
//   (id, quantity, userId) => async (dispatch, getState) => {
//     let cart = getState().cart.items;
//     for (var item of cart) {
//       if (item.id === id) {
//         item.quantity = quantity;
//       }
//     }
//     dispatch({ type: CHANGE_PRODUCT_QTY, payload: cart });
//     localStorage.setItem("cart", JSON.stringify(cart));

//     // RUTA DE ACTUALIZACION AL BACK                                                  ---------
//     if (userId) await axios.put(url + "/order/addOrder", { userId, products: [{ productId: id, quantity }] })
//   };

// export const loadCart = () => {
//   return async (dispatch) => {
//     let cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     dispatch({
//       type: LOAD_CART,
//       payload: cart,
//     });
//   };
// };

// export const checkout = () => async (dispatch, getState) => {
//   const cart = JSON.parse(localStorage.getItem("cart"));
//   try {
//     axios.post("/order/create", { cart });
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const updateTotal = () => async (dispatch) => {
//   var cart = JSON.parse(localStorage.getItem("cart"));
//   var total = 0;
//   if (cart?.length) {
//     for (var i of cart) {
//       total += parseFloat(i.price) * parseFloat(i.quantity);
//     }
//   }
//   dispatch({ type: UPDATE_TOTAL, payload: total });
// };
