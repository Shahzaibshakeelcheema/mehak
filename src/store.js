import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import {productListReducer } from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'


const reducer = combineReducers({
  productList: productListReducer,
  cartList:cartReducer,
});


const productsFromStorage = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : null;

  const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? (localStorage.getItem("cartItems"))
  : [];
  const ordersFromStorage = localStorage.getItem('orders')
  ? JSON.parse(localStorage.getItem('orders'))
  : [];


  const initialState = {
    productList: { products: productsFromStorage },
    cartList: { cartItems: ordersFromStorage, orders: ordersFromStorage },
    // cartList:{cartItems:cartItemsFromStorage}
  };
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;