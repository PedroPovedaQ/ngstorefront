import { Component, OnInit } from "@angular/core";
import * as fromStore from "./store/reducers";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  cartItemCount$: Observable<number>;
  constructor(private _store: Store<fromStore.State>) {}

  ngOnInit() {
    this.cartItemCount$ = this._store.pipe(
      select(fromStore.getAllCartProducts),
      map(cartProducts => cartProducts.length)
    );
  }
}
