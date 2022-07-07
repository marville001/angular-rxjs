import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId = 0;

  products$ = this.productService.product$
      .pipe(
        catchError(err => {
          this.errorMessage = err
          return EMPTY
        })
      );

  constructor(private productService: ProductService) { }


  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
