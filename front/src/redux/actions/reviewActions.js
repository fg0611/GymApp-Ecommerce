import axios from "axios";
import { url } from "../../App";

export const GET_REVS = "GET_REVS";
export const CHECK_REVIEWER = "CHECK_REVIEWER";
export const REV_MODIFIER = "CHECK_REVIEWER";

//http://localhost:3001/review ---> /check, /add, /delete, /update

//get: todos los de 1 prod body = {"productId": 2}
// tod0s los revs de un usuario  body = {"userId": 2}
// 1 rev especifico body = { "userId": "49750430", "productId": 2 }

//verificar su un usuario pude comentar para habilitar la opcion, body = { "userId": "49750430", "productId": 2 }
//crear 1 rev, body =  {"userId": "49750430","productId": 2,"comment": "buen producto","rating": 3}
//eliminar 1 rev, body = { "userId": "49750430", "productId": 2 }
//editar 1 rev, body =  {"userId": "49750430","productId": 2,"comment": "buen producto","rating": 3}

export function getRevs(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(url + "/review", body);
      dispatch({ type: GET_REVS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function checkReviewer(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(url + "/review/check", body);
      dispatch({ type: CHECK_REVIEWER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addRev(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(url + "/review/add", body);
      dispatch({ type: REV_MODIFIER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateRev(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(url + "/review/update", body);
      dispatch({ type: REV_MODIFIER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteRev(body) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(url + "/review/delete", body);
      dispatch({ type: REV_MODIFIER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}
