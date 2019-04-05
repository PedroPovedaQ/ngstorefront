import { Product } from "./../../../../models/product";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.scss"]
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Output() removed = new EventEmitter<Product>();
  constructor() {}

  ngOnInit() {}
}
