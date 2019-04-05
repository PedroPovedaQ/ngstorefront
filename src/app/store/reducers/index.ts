import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import * as fromProducts from "./product.reducer";
import * as fromCart from "./cart.reducer";
export interface State {
  products: fromProducts.ProductState;
  cart: fromCart.CartState;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProducts.reducer,
  cart: fromCart.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

// Product Selectors
export const getProductState = (state: State) => state.products;
export const getProductEntities = createSelector(
  getProductState,
  fromProducts.getProductEntities
);
export const getProductLoaded = createSelector(
  getProductState,
  fromProducts.getProductLoaded
);
export const getAllProducts = createSelector(
  getProductEntities,
  entities => Object.keys(entities).map(productId => entities[productId])
);

// Cart Selectors
export const getCartState = (state: State) => state.cart;
export const getCartEntities = createSelector(
  getCartState,
  fromCart.getCartEntities
);
export const getAllCartProducts = createSelector(
  getCartEntities,
  entities => Object.keys(entities).map(productId => entities[productId])
);
export const getCartTotalPrice = createSelector(
  getCartState,
  fromCart.getCartTotalPrice
);
