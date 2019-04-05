import { Product } from "./../../models/product";
import { Action } from "@ngrx/store";

export const ADD_CART_ITEM_SUCCESS = "Add Item To Cart Success";
export const REMOVE_CART_ITEM_SUCCESS = "Remove Item From Cart Success";

export class AddCartItemSuccess implements Action {
  readonly type = ADD_CART_ITEM_SUCCESS;
  constructor(public payload: Product) {}
}

export class RemoveCartItemSuccess implements Action {
  readonly type = REMOVE_CART_ITEM_SUCCESS;
  constructor(public payload: Product) {}
}

export type CartAction = AddCartItemSuccess | RemoveCartItemSuccess;
