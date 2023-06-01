import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../actions/cartActions';

const initialState = {
  cartItems: [],
  order: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product, qty } = action.payload;
      const itemExists = state.cartItems.find((item) => item.id === product.id);

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === product.id ? { ...item, qty } : item
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, qty }]
        };
      }


      case REMOVE_FROM_CART:
      const productId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== productId),
      };

      case CHECKOUT:
      return {
        ...state,
        order:action.payload,
      };

    default:
      return state;
  }
};
// cartReducer.js

// ...



// export default cartReducer;
