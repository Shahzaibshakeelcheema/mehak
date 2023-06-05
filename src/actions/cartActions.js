    // Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT = 'CHECKOUT';

// Action Creators
export const addToCart = (product, qty) => (dispatch, getState) => {
  debugger
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product,
      qty
    }
  
  });

  // Save cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cartItems));
  debugger
};


export const removeFromCart = (productId) => (dispatch) => {
  debugger
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
  debugger
};


export const checkout = (name, address) => (dispatch, getState) => {
  debugger
  const { cartItems } = getState().cartList;

  // Perform any additional validation or processing before placing the order

  // Place the order with the provided name, address, and cart items
  
  const order = {
    id:Date.now(),
    name,
    address,
    cartItems,
  };
  // You can perform an API call here to save the order to a database or perform any other necessary actions
debugger
  // Dispatch the checkout action with the order payload
  dispatch({
    type: CHECKOUT,
    payload: order,
  });
  localStorage.setItem('orders', JSON.stringify(getState().cartList.orders));
  debugger
};
    