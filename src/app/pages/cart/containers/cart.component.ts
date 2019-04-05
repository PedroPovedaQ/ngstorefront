import { RemoveCartItemSuccess } from "./../../../store/actions/cart.actions";
import { Product } from "./../../../models/product";
import { Component, OnInit } from "@angular/core";
import * as fromStore from "../../../store/reducers";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  cartProducts$: Observable<Product[]>;
  cartTotal$: Observable<number>;
  constructor(private _store: Store<fromStore.State>) {}

  ngOnInit() {
    this.cartProducts$ = this._store.pipe(select(fromStore.getAllCartProducts));
    this.cartTotal$ = this._store.pipe(select(fromStore.getCartTotalPrice));
  }

  removeProductFromCart(product: Product) {
    this._store.dispatch(new RemoveCartItemSuccess(product));
  }
}
