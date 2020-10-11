import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SHOPPING_PAGE_NAMES } from 'src/app/helpers/navigation.helper';
import { setPageToListOfLists } from 'src/app/ngrx/actions/Shopping/navigation.action';
import { ProductService } from 'src/app/services/Shopping/product.service';

@Component({
  selector: 'app-list-of-product',
  templateUrl: './list-of-product.component.html',
  styleUrls: ['./list-of-product.component.scss']
})
export class ListOfProductComponent implements OnInit {
  SHOPPING_PAGE_NAMES = SHOPPING_PAGE_NAMES;
  shoppingNavigation$: Observable<any>;

  isSearchActive: boolean;
  searchedProductText: string;
  foundListOfProduct: ProductI[];

  constructor(
    private store: Store<{ user, shoppingNavigation }>,
    private productService: ProductService,
  ) { 
    this.shoppingNavigation$ = store.select(state => state.shoppingNavigation.pageName);
    this.searchedProductText = ""
    this.isSearchActive = false;
    this.foundListOfProduct = [];
  }

  ngOnInit(): void {
  }

  onClickGoBack() {
    this.store.dispatch(setPageToListOfLists());
  }

  onClickPlusButton() {
    this.isSearchActive = !this.isSearchActive;
  }


  onChangeSearchedProductText() {
    if (this.searchedProductText === "") {
      this.foundListOfProduct = [];
      return;
    }

    this.productService.getProductsByName({
      searchedText: this.searchedProductText
    }).subscribe(r => {
      this.foundListOfProduct = r.body;
    })
  }

}
