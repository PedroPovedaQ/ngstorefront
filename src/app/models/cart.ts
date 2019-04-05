import { Product } from "./product";
export interface Cart {
  items: Product[];
  total: number;
}
