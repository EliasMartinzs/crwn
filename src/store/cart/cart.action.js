import { CART_ACTION_TYPES } from './cart.types';

import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsCartOpen = isCartOpen =>
  createAction(CART_ACTION_TYPES.IS_CART_OPEN, isCartOpen);

export const setAddItemToCart = AddProductToCart =>
  createAction(CART_ACTION_TYPES.SET_ITEM_TO_CART, AddProductToCart);

export const setRemoveItemToCart = RemoveProductToCart =>
  createAction(CART_ACTION_TYPES.REMOVE_ITEM_TO_CART, RemoveProductToCart);

export const setClearItemFromCart = ProductToRemove =>
  createAction(CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART, ProductToRemove);

export const setTotalItemFromCart = productTotal =>
  createAction(CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART, productTotal);
