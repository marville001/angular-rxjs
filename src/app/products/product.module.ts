import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductShellComponent } from './product-list-alt/product-shell.component';
import { ProductDetailComponent } from './product-list-alt/product-detail.component';

import { SharedModule } from '../shared/shared.module';
import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    ProductRoutingModule

  ],
  declarations: [
    ProductListComponent,
    ProductShellComponent,
    ProductListAltComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
