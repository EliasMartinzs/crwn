import { CART_ACTION_TYPES } from './cart.types';

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalItems: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTION_TYPES.SET_ITEM_TO_CART:
      const existingAddItem = state.cartItems.find(
        cartItem => cartItem.id === payload.id
      );

      if (existingAddItem) {
        return {
          cartItems: state.cartItems.map(cartItem =>
            cartItem.id === payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
      };
    case CART_ACTION_TYPES.REMOVE_ITEM_TO_CART:
      const existingRemoveItem = state.cartItems.find(
        cartItem => cartItem.id === payload.id
      );

      if (existingRemoveItem === 1) {
        return {
          cartItems: state.cartItems.filter(
            cartItem => cartItem.id !== payload.id
          ),
        };
      }

      return {
        cartItems: state.cartItems.map(cartItem =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: payload.quantity - 1 }
            : cartItem
        ),
      };
    case CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        ),
      };
    case CART_ACTION_TYPES.TOTAL_CART_ITEMS:
      return {
        totalItems: state.cartItems.reduce(
          (acc, curr) => acc + payload.quantity,
          0
        ),
      };
    default:
      return state;
  }
};
