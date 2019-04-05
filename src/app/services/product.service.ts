import { Product } from "src/app/models/product";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<[Product]> {
    return this._http.get<[Product]>(`http://${environment.api}/products`);
  }
}
