    // Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT = 'CHECKOUT';

// Action Creators
export const addToCart = (product, qty) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product,
      qty
    }
  });

  // Save cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cartItems));
};


export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
};


export const checkout = (name, address) => (dispatch, getState) => {
  debugger
  const { cartItems } = getState().cartList;

  // Perform any additional validation or processing before placing the order

  // Place the order with the provided name, address, and cart items
  
  const order = [
    name,
    address,
    cartItems,
  ];
  // You can perform an API call here to save the order to a database or perform any other necessary actions
debugger
  // Dispatch the checkout action with the order payload
  dispatch({
    type: CHECKOUT,
    payload: order,
  });
};
    // export const addToCart = (id, qty) => async (dispatch, getState) => {
    //             // debugger;
    //     dispatch({
    //       type: CART_ADD_ITEM,
    //       payload: {
    //         id: data.id,
    //         title: data.title,
    //         image: data.image,
    //         price: data.price,
    //         stock: data.stock,
    //         qty: Number(qty),
    //       },
    //     });
    //     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
    //   };
    //   export const removeFromCart = (id) => (dispatch, getState) => {
    //     dispatch({
    //       type: CART_REMOVE_ITEM,
    //       payload: id,
    //     });
    //     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
    //   };