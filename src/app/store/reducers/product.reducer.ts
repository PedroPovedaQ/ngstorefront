import {
  ProductAction,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_FAIL
} from "../actions/product.actions";
import { Product } from "src/app/models/product";

export interface ProductState {
  entities: { [id: number]: Product };
  loaded: boolean;
  loading: boolean;
  selected: Product;
}

export const initialState: ProductState = {
  entities: {},
  loaded: false,
  loading: false,
  selected: undefined
};

export function reducer(
  state: ProductState = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }

    case LOAD_PRODUCTS_SUCCESS: {
      const products = action.payload;
      const entities = products.reduce(
        (productEntities: { [id: number]: Product }, product: Product) => {
          return {
            ...productEntities,
            [product.id]: product
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getProductEntities = (state: ProductState) => state.entities;
export const getProductLoading = (state: ProductState) => state.loading;
export const getProductLoaded = (state: ProductState) => state.loaded;
export const getSelectedProduct = (state: ProductState) => state.selected;
