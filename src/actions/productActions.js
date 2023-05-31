import {
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    
  } from '../constants/productConstatns';
import { products } from "../data/products";
  


export const listProducts = () => async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: products,
      });
      localStorage.setItem("products", JSON.stringify(products));
    }
     catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.message,
      });
    }
  };

  