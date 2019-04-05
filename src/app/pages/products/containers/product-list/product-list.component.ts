import { AddCartItemSuccess } from "./../../../../store/actions/cart.actions";
import { Product } from "./../../../../models/product";
import { Component, OnInit } from "@angular/core";
import * as fromStore from "../../../../store/reducers";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private _store: Store<fromStore.State>) {}

  ngOnInit() {
    this.products$ = this._store.pipe(select(fromStore.getAllProducts));
  }

  addToCart(product: Product) {
    this._store.dispatch(new AddCartItemSuccess(product));
  }
}
