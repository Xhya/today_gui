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
  foundProducts: ProductI[];
  currentListOfProduct: ListOfProductI;
  currentUser: UserI;
  formatedDisplayedListOfProductWithCategories: object;

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
    this.foundProducts = [];
    this.formatedDisplayedListOfProductWithCategories = {};
  }

  ngOnInit(): void {
    this.initStore();
  }

  initStore() {
    this.currentListOfProduct$.subscribe(r => {
      this.currentListOfProduct = r;
      this.updateFormatedListOfProductWithCategories();
    });
    this.user$.subscribe(r => {
      this.currentUser = r;
    });  
  }

  updateFormatedListOfProductWithCategories() {
    const sortedProducts = [...this.currentListOfProduct.products ].sort((a, b) => a.product.category.name < b.product.category.name ? -1 : 1);

    this.formatedDisplayedListOfProductWithCategories = {};
    
    for (const productOfList of sortedProducts) {

      let category = this.formatedDisplayedListOfProductWithCategories[productOfList.product.category.name]; 

      if (!category) {
        this.formatedDisplayedListOfProductWithCategories[productOfList.product.category.name] = [];
      }

      this.formatedDisplayedListOfProductWithCategories[productOfList.product.category.name] = [...this.formatedDisplayedListOfProductWithCategories[productOfList.product.category.name], productOfList];

    }
  }

  onClickGoBack() {
    this.store.dispatch(setCurrentListOfProduct({ currentListOfProduct: null }))
    this.store.dispatch(setPageToListOfLists());
  }

  onClickPlusButton() {
    this.isSearchActive = !this.isSearchActive;
  }


  onChangeSearchedProductText() {
    if (this.searchedProductText === "") {
      this.foundProducts = [];
      return;
    }

    this.productService.getProductsByName({
      searchedText: this.searchedProductText
    }).subscribe(r => {
      this.foundProducts = r.body;
    });
  }

  onClickFoundProduct(product: ProductI) {
    this.searchedProductText = "";
    this.onChangeSearchedProductText();

    this.listOfProductService.addProductToListOfProduct({
      product: product,
      listOfProductId: this.currentListOfProduct.id,
      userId: this.currentUser.id,
    }).subscribe(r => {
      this.store.dispatch(setCurrentListOfProduct({ currentListOfProduct: r.body }));
    });
  }

}
