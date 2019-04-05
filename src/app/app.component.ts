import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-storefront";
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
}
