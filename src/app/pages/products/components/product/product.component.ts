import { Product } from "./../../../../models/product";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() added = new EventEmitter<Product>();
  constructor() {}

  ngOnInit() {}

  addToCartClicked() {
    this.added.emit(this.product);
  }
}
