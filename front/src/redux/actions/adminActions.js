import axios from "axios";
import { url } from "../../App";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USERS = "GET_USERS";
export const USER_DETAIL = "USER_DETAIL";
export const GET_USER_ORDERS = "GET_USER_ORDERS";
export const GET_ORDERS = "GET_ORDERS";
export const ORDER_DETAIL = "ORDER_DETAIL";

export function getUsers(){
  return async (dispatch) => {
    try {
      const info = await axios.get( url + "/user")
      return dispatch({ type: GET_USERS, payload: info.data })
    } catch (error) {
      console.log(error)
    }
  }
}


export function getUserDetail(id){
  return async (dispatch) => {
    try {
      const {data} = await axios.get( url + "/user")
      let payload = data.filter( e => e.id === id)[0]
      return dispatch({ type: USER_DETAIL, payload})
    } catch (error) {
      console.log(error)
    }
  }
}

export function getUserOrders(id){
  // console.log(id)
  return async (dispatch) => {
    try {
      const {data} = await axios.get( url + "/orders")
      let payload = data.filter( e => e.userId === id && e.orderState !== "CART")
      return dispatch({ type: GET_USER_ORDERS, payload })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getOrderDetail(cartId) {
  console.log("entro a getOrderDetail")
  return async (dispatch) => {
    try {
      const {data} = await axios.get(url + "/orders/" + cartId);
      return dispatch({type: ORDER_DETAIL, payload: data})
    } catch (error) {
      console.log(error)
    }
  }
}

export function getOrders(){
  return async (dispatch) => {
    try {
      const {data} = await axios.get( url + "/orders")
      let payload = data.filter( e =>  e.orderState !== "CART")
      return dispatch({ type: GET_ORDERS, payload })
    } catch (error) {
      console.log(error)
    }
  }
}


export const postCategory = (form) => async (dispatch) => {
  try {
    const info = await axios.post(url + "/category/create", form);
    console.log(info.data);
  } catch (e) {
    console.log(e);
  }
};

export const postProduct = (form) => async (dispatch) => {
  console.log("Form actions", form);
  try {
    const info = await axios.post(url + "/product/addProducts", form);
    console.log(info.data);
  } catch (e) {
    console.log(e);
  }
};
export const updateCategory = (idCategory, info) => async (dispatch) => {
  try {
    const data = await axios.put(url + "/category/update/" + idCategory, info);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export const deleteCategory = (name) => async (dispatch) => {
  try {
    const info = await axios.delete(url + "/category/delete/" + name);
    console.log(info);
  } catch (e) {
    console.log(e);
  }
};

export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      await axios.delete(url + "/product/delete/" + id);
      dispatch({ type: DELETE_PRODUCT, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
}

export function editProduct(info, id) {
  return async function () {
    try {
      await axios.put(url + "/product/update/" + id, info);
    } catch (error) {
      console.log(error);
    }
  };
}