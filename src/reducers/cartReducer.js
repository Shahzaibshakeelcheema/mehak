import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT,RESET_CART } from '../actions/cartActions';

const initialState = {
  cartItems: [],
  orders: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
  const { product, qty } = action.payload;
  debugger
  const itemExists = state.cartItems.find((item) => item.id === product.id);
debugger
  if (itemExists) {
    return {
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id === product.id ? { ...item, qty } : item
      ),
    };
  } else {
    return {
      ...state,
      cartItems: [...state.cartItems, { ...product, qty }],
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
        orders: [...state.orders, action.payload],
      };

      case RESET_CART:
      return {
        ...state,
        cartItems: [],
        // reset other cart state properties if needed
      };
    default:
      return state;
  }
};

export default cartReducer;
