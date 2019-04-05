import { ProductsGuard } from "./guards/products.guard";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./containers/product-list/product-list.component";
import { ProductComponent } from "./components/product/product.component";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProductListComponent,
        canActivate: [ProductsGuard]
      }
    ])
  ],
  declarations: [ProductListComponent, ProductComponent],
  providers: [ProductsGuard]
})
export class ProductsModule {}
