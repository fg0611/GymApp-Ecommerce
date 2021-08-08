import axios from "axios";
import { url } from "../../App";
import { auth, loginWithGoogle } from "../../firebase";

export const LOGIN = "LOGIN";
export const LOGIN_WITH_USER = "LOGIN_WiTH_USER";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_SUCESS_GOOGLE = "LOGIN_SUCESS_GOOGLE";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER_LOG_OUT = "USER_LOG_OUT";
export const GET_USER_TYPE = "GET_USER_TYPE"
export const ORDERS_BY_USER_ID= "ORDERS_BY_USER_ID"

//crea nuevo usuario en la base de datos con id, mail, nombre, apellido
export let newUser = (form) => async (dispatch) => {
  try {
    await axios.post(url + "/user/create", form);
    // console.log("dataaaa", data);
  } catch (e) {
    // console.log(e);
  }
};

//hace el login con mail, contra, y deja guardado en el localstorage la sesion
export let doUserLogin = (user) => async (dispatch, getState) => {
  dispatch({
    type: LOGIN_SUCESS
  })
  saveStorage(getState().user)

};


//cierra sesion y limpia el storage
export let doLogOut = () => (dispatch) => {
  auth.signOut();
  // console.log(auth.signOut());
  dispatch({
    type: USER_LOG_OUT,
  });

  localStorage.clear()
};


// action para recuperar la sesion iniciada
/* export let restoreSessionAction = () => (dispatch) => {
  let storage = localStorage.getItem("storage");
  storage = JSON.parse(storage);
  if (storage && storage.loggedIn === true) {
    dispatch({
      type: LOGIN_SUCESS,
      payload: storage,
    });
  }
}; */




// action para recuperar la sesion iniciada y que no se borre en el estado redux la info(esto va en la store)
export let restoreSessionAction = () => (dispatch) => {
  let storage = localStorage.getItem("storage");
  storage = JSON.parse(storage); //lo convertimos en un objeto
  if (storage && storage.uid) {
    dispatch({
      type: LOGIN_SUCESS,
      payload: storage,
    });
  }
};

//funcion auxiliar que nos ayuda a guardar cosas en el local storage
export function saveStorage(storage) {
  localStorage.storage = JSON.stringify(storage);
  //tenemos que pasar texto y no objeto! por eso el stringify
}


//hace el login con google
export let doGoogleLogIn = () => async (dispatch, getState) => {
  dispatch({
    type: LOGIN, //el login solo pasa el fetching a true (sirve en caso de queres mostrar un mensaje de carga ya que puede tardar unos segundos en autenticar)
  });

  return loginWithGoogle() //retorna la promesa
    .then((user) => {
      let form = {
        id: user.uid,
        email: user.email,
      }
      axios.post(url + "/user/create", form);
      return user;
    })
    .then((user) => {
      dispatch({
        type: LOGIN_SUCESS,
        payload: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photo: user.photoURL,
        },
      });
      saveStorage(getState().user);
    })
    .catch((e) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: e.message,
      });
    });
};



export const getOrderByUserId = (id) => {
  return async (dispatch) => {
    const user = await axios.get('http://localhost3001/user/user/'+id)
      dispatch({
      type: "ORDER_BY_USER_ID",
      payload: user.data,
    });
  };
};

export const getOrdersByUserId = (id) => {
 // console.log('id de la action', id)
  return async function (dispatch) {
    const {data} = await axios.get('http://localhost:3001/orders/user/'+id)
    
    let payload = data.ordersDetails.filter( e =>e.orderState !== "CART")
    console.log('payload',payload)
      dispatch({
      type: ORDERS_BY_USER_ID,
      payload
    });
  };
};

export function getUserType(id){
  return async (dispatch) => {
    try {
      const {data} = await axios.get( url + "/user/getUserType/" + id)
     return dispatch({ type: GET_USER_TYPE, payload: data })
    //  window.localStorage.setItem('userType', JSON.stringify(info.data)) //// MARCOS
      
    } catch (error) {
      console.log(error)
    }
  }
}









// export let doGoogleLogIn = () => (dispatch, getState) => {
//   dispatch({
//     type: LOGIN, //el login solo pasa el fetching a true (sirve en caso de queres mostrar un mensaje de carga ya que puede tardar unos segundos en autenticar)
//   });

//   const products = JSON.parse(localStorage.getItem("cart")) 

//   return loginWithGoogle() //retorna la promesa
//     .then(async (user) => {

//       dispatch({
//         type: LOGIN_SUCESS,
//         payload: {
//           uid: user.uid,
//           displayName: user.displayName,
//           email: user.email,
//           photo: user.photoURL,
//         },
//       });
//       saveStorage(getState());
//     })
//     .catch((e) => {
//       dispatch({
//         type: LOGIN_ERROR,
//         payload: e.message,
//       });
//     });
// };
