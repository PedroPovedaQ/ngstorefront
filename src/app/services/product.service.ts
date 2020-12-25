import { Observable, of } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/app/models/product";
import { environment } from "../../environments/environment";

const products: Product[] = [
  {
    name: "Latte",
    id: 1,
    short_description: "Test",
    long_description: "Test",
    price: 3.99,
    image:
      "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
    category: "latte",
  },
  {
    name: "Cold Brew",
    id: 2,
    short_description: "Test",
    long_description: "Test",
    price: 2.99,
    image:
      "https://order.foxtailcoffee.com/uploads/1/3/1/4/131447049/s317056968364251303_p8_i1_w1280.jpeg",
    category: "latte",
  },
  {
    name: "Americano",
    id: 3,
    short_description: "Test",
    long_description: "Test",
    price: 5.99,
    image:
      "https://order.foxtailcoffee.com/uploads/1/3/1/4/131447049/s317056968364251303_p15_i1_w1280.jpeg",
    category: "latte",
  },
  {
    name: "Iced Latte",
    id: 4,
    short_description: "Test",
    long_description: "Test",
    price: 5.99,
    image:
      "https://order.foxtailcoffee.com/uploads/1/3/1/4/131447049/s317056968364251303_p21_i1_w1280.jpeg",
    category: "latte",
  },
  {
    name: "Café con Leche",
    id: 5,
    short_description: "Test",
    long_description: "Test",
    price: 5.99,
    image:
      "https://order.foxtailcoffee.com/uploads/1/3/1/4/131447049/s317056968364251303_p72_i1_w1280.jpeg",
    category: "latte",
  },
  {
    name: "Iced Matcha Latte",
    id: 5,
    short_description: "Test",
    long_description: "Test",
    price: 4.99,
    image:
      "https://order.foxtailcoffee.com/uploads/1/3/1/4/131447049/s317056968364251303_p50_i1_w1280.jpeg",
    category: "latte",
  },
  {
    name: "Cortadito",
    id: 6,
    short_description: "Test",
    long_description: "Test",
    price: 4.29,
    image:
      "https://order.foxtailcoffee.com/uploads/1/3/1/4/131447049/s317056968364251303_p89_i1_w1280.jpeg",
    category: "latte",
  },
];
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return of(products);
  }
}

// name: string;
//   id: number;
//   short_description: string;
//   long_description: string;
//   price: number;
//   image: string;
//   category: string;
