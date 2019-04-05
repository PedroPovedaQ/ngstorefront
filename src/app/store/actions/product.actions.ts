import { Action } from "@ngrx/store";
import { Product } from "./../../models/product";

// load products
export const LOAD_PRODUCTS = "[Accounts] Load Products";
export const LOAD_PRODUCTS_FAIL = "[Accounts] Load Products Fail";
export const LOAD_PRODUCTS_SUCCESS = "[Accounts] Load Products Success";

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export type ProductAction =
  | LoadProducts
  | LoadProductsFail
  | LoadProductsSuccess;
