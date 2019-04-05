import { State, getProductLoaded } from "./../../../store/reducers/index";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, filter, switchMap, take, tap } from "rxjs/operators";
import { LoadProducts } from "./../../../store/actions/product.actions";
import { ProductState } from "./../../../store/reducers/product.reducer";

@Injectable({
  providedIn: "root"
})
export class ProductsGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(getProductLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadProducts());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
