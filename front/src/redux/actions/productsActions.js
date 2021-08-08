import axios from "axios";
import { url } from "../../App";

export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const RESET_PRODUCT_DETAIL = "RESET_PRODUCT_DETIAL";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const ORDER_PRODUCTS = "ORDER_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
//import {BASE_URL_API} from '../../';
// const {BASE_URL_API} = process.env;
// const url = BASE_URL_API || "http://localhost:3001";
// const {BASE_URL_API} = require('../../index')
// require("dotenv").config();

export function getProductDetail(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`${url}/product/` + id);
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: data,
    });
  };
}

export function resetProductDetail() {
  return { type: RESET_PRODUCT_DETAIL };
}

export function getProducts() {
  return async function (dispatch) {
    await axios.get(`${url}/product`).then(({ data }) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      })
    );
  };
}

export const searchProducts = (input) => {
  return async (dispatch) => {
    const { data } = await axios.get(url + `/product?string=${input}`);
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  };
};

export function getCategories() {
  return async function (dispatch) {
    const { data } = await axios.get(url + "/category");
    dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  };
}

export function orderProducts(payload) {
  return { type: ORDER_PRODUCTS, payload };
}

export function filterProducts(category) {
  return async function (dispatch) {
    const { data } = await axios.get(url + "/product");
    dispatch({
      type: FILTER_PRODUCTS,
      payload: data,
      category,
    });
  };
}
