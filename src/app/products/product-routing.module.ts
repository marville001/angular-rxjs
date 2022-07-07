import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductShellComponent } from "./product-list-alt/product-shell.component";
import { ProductListComponent } from "./product-list.component";



@NgModule({
	imports: [RouterModule.forChild([
		{
			path: '',
			component: ProductListComponent
		},
		{
			path: 'alternate',
			component: ProductShellComponent
		}
	])],
	exports: [RouterModule]
})
export class ProductRoutingModule { }