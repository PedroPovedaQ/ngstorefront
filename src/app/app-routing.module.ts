import { CartComponent } from "./pages/cart/containers/cart.component";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "products",
    loadChildren: "./pages/products/products.module#ProductsModule"
  },
  { path: "cart", component: CartComponent },
  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
