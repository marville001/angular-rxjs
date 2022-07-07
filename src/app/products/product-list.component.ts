import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, startWith, Subject } from 'rxjs';

import { ProductCategoryService } from '../product-categories/product-category.service';

import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Product List';

  private errorMessageSubject = new Subject<string>()
  errorMessage$ = this.errorMessageSubject.asObservable();

  // private categorySelectedSubject = new Subject<number>();
  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();


  products$ = combineLatest([
    this.productService.productsWithAdd$,
    this.categorySelectedAction$
      // .pipe( // When not using behavior subject
      //   startWith(0)
      // )
  ])
    .pipe(
      map(([products, selectedCategoryId]) =>
        products.filter(product =>
          selectedCategoryId ? product.categoryId === selectedCategoryId : true
        )
      ),
      catchError(err => {
        this.errorMessageSubject.next(err)
        return EMPTY
      })
    )

  categories$ = this.productCategoryService.productCategories$.pipe(
    catchError(err => {
      this.errorMessageSubject.next(err)
      return EMPTY
    })
  )


  constructor(private productService: ProductService, private productCategoryService: ProductCategoryService) { }

  onAdd(): void {
    this.productService.addProduct();
  }

  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId)
  }
}
