//actions
import { DELETE_PRODUCT } from "../actions/adminActions";
import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCTS,
  ORDER_PRODUCTS,
  GET_CATEGORIES,
  FILTER_PRODUCTS,
  RESET_PRODUCT_DETAIL
} from "../actions/productsActions";

//states
const initialState = {
  productDetail: null,
  products: null,
  categories: null,
  categorySelected: "Todas",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case RESET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: null,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        })
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter( p => p.id !== action.payload)
      };  
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case FILTER_PRODUCTS:
      let payload = action.payload;

      return {
        ...state,
        categorySelected: action.category,
        products: payload.filter((p) =>
          p.categories.find((c) => c.name === action.category)
        ),
      };
    case ORDER_PRODUCTS:
      let products;
      if (action.payload === "az" || action.payload === "za") {
        products = state.products.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        if (action.payload === "za") products = products.reverse();
      }
      if (action.payload === "minMax" || action.payload === "maxMin") {
        products = state.products.sort((a, b) => {
          return a.price - b.price;
        });
        if (action.payload === "maxMin") products = products.reverse();
      }

      return {
        ...state,
        products,
      };
    default:
      return state;
  }
}
