import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ProductService } from "../../services/product.service";
import {
  LoadProducts,
  LoadProductsFail,
  LoadProductsSuccess,
  LOAD_PRODUCTS
} from "../actions/product.actions";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(LOAD_PRODUCTS),
    switchMap(() =>
      this.productService.getAll().pipe(
        map(products => new LoadProductsSuccess(products)),
        catchError(error => of(new LoadProductsFail(error)))
      )
    )
  );
}
