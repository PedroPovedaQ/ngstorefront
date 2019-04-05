import { Product } from "./../../models/product";
import {
  CartAction,
  ADD_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_SUCCESS
} from "./../actions/cart.actions";

export interface CartState {
  entities: { [id: number]: Product };
  totalPrice: number;
}

export const initialState: CartState = {
  entities: {},
  totalPrice: 0
};

export function reducer(state: CartState = initialState, action: CartAction) {
  switch (action.type) {
    case ADD_CART_ITEM_SUCCESS: {
      const entities = {
        ...state.entities,
        [action.payload.id]: action.payload
      };
      let totalPrice = state.totalPrice + action.payload.price;
      totalPrice = parseFloat(totalPrice.toFixed(2));
      return { ...state, entities, totalPrice };
    }

    case REMOVE_CART_ITEM_SUCCESS: {
      const { [action.payload.id]: removed, ...entities } = state.entities;
      let totalPrice = state.totalPrice - removed.price;
      totalPrice = parseFloat(totalPrice.toFixed(2));
      return { ...state, entities, totalPrice };
    }

    default:
      return state;
  }
}

export const getCartEntities = (state: CartState) => state.entities;
export const getCartTotalPrice = (state: CartState) => state.totalPrice;
