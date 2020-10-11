import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SHOPPING_PAGE_NAMES } from 'src/app/helpers/navigation.helper';
import { setCurrentListOfProduct } from 'src/app/ngrx/actions/Shopping/data.action';
import { setPageToListOfLists } from 'src/app/ngrx/actions/Shopping/navigation.action';
import { ListOfProductService } from 'src/app/services/Shopping/listOfProduct.service';
import { ProductService } from 'src/app/services/Shopping/product.service';
import { ListOfProductI } from 'src/app/_types/listOfProduct';
import { UserI } from 'src/app/_types/user';

@Component({
  selector: 'app-list-of-product',
  templateUrl: './list-of-product.component.html',
  styleUrls: ['./list-of-product.component.scss']
})
export class ListOfProductComponent implements OnInit {
  SHOPPING_PAGE_NAMES = SHOPPING_PAGE_NAMES;

  pageName$: Observable<any>;
  currentListOfProduct$: Observable<any>;
  user$: Observable<any>;

  isSearchActive: boolean;
  searchedProductText: string;
  foundListOfProduct: ProductI[];
  currentListOfProduct: ListOfProductI;
  currentUser: UserI;

  constructor(
    private store: Store<{ shoppingNavigation, shoppingData, user }>,
    private productService: ProductService,
    private listOfProductService: ListOfProductService,
  ) { 
    this.pageName$ = store.select(state => state.shoppingNavigation.pageName);
    this.currentListOfProduct$ = store.select(state => state.shoppingData.currentListOfProduct);
    this.user$ = store.select(state => state.user.user);
      

    this.searchedProductText = ""
    this.isSearchActive = false;
    this.foundListOfProduct = [];
  }

  ngOnInit(): void {
    this.initStore();
  }

  initStore() {
    this.currentListOfProduct$.subscribe(r => {
      this.currentListOfProduct = r;
    });
    this.user$.subscribe(r => {
      this.currentUser = r;
    });  
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
    });
  }

  onClickFoundProduct(product: ProductI) {
    this.isSearchActive = false;

    this.listOfProductService.addProductToListOfProduct({
      product: product,
      listOfProductId: this.currentListOfProduct.id,
      userId: this.currentUser.id,
    }).subscribe(r => {
      this.store.dispatch(setCurrentListOfProduct({ currentListOfProduct: r.body }));
    });
  }

}
