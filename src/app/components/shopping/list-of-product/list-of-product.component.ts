import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { SHOPPING_PAGE_NAMES } from 'src/app/helpers/navigation.helper';
import { ListOfProductService } from 'src/app/services/Shopping/listOfProduct.service';
import { ProductService } from 'src/app/services/Shopping/product.service';
import ShoppingDataStore from 'src/app/store/Shopping/Data/data.store';
import ShoppingNavigationStore from 'src/app/store/Shopping/Navigation/navigation.store';
import UserStore from 'src/app/store/User/user.store';
import { ListOfProductI } from 'src/app/_types/listOfProduct';
import { UserI } from 'src/app/_types/user';

@Component({
  selector: 'app-list-of-product',
  templateUrl: './list-of-product.component.html',
  styleUrls: ['./list-of-product.component.scss']
})
export class ListOfProductComponent implements OnInit {
  @ViewChild("nameOflistOfProductInput", { static: false }) nameOflistOfProductInput: ElementRef;

  SHOPPING_PAGE_NAMES = SHOPPING_PAGE_NAMES;

  shoppingNavigation$: Observable<any>;
  shoppingData$: Observable<any>;
  user$: Observable<any>;

  isSearchActive: boolean;
  searchedProductText: string;
  foundProducts: ProductI[];
  currentListOfProduct: ListOfProductI;
  currentUser: UserI;
  formatedDisplayedListOfProductWithCategories: object;

  constructor(
    private productService: ProductService,
    private listOfProductService: ListOfProductService,
    private shoppingDataStore: ShoppingDataStore,
    private shoppingNavigationStore: ShoppingNavigationStore,
    private userStore: UserStore,
  ) { 
    this.shoppingNavigation$ = shoppingNavigationStore.state$;
    this.shoppingData$ = shoppingDataStore.state$;
    this.user$ = userStore.state$;

    this.searchedProductText = ""
    this.isSearchActive = false;
    this.foundProducts = [];
    this.formatedDisplayedListOfProductWithCategories = {};
  }

  ngOnInit(): void {
    this.initStore();
  }

    
  ngAfterViewInit() {
    this.nameOflistOfProductInput.nativeElement.focus();
  }


  initStore() {
    this.shoppingData$.subscribe(r => {
      this.currentListOfProduct = r.currentListOfProduct;
      this.updateFormatedListOfProductWithCategories();
    });
    this.user$.subscribe(r => {
      this.currentUser = r.user;
    });  
  }

  onClickGoBack() {
    this.shoppingNavigationStore.setPageToListOfProduct();
    this.shoppingDataStore.setCurrentListOfProduct({ currentListOfProduct: null });
  }

  onClickPlusButton() {
    this.isSearchActive = !this.isSearchActive;
  }

  onClickFoundProduct(product: ProductI) {
    this.searchedProductText = "";
    this.onChangeSearchedProductText();

    this.listOfProductService.addProductToListOfProduct({
      product: product,
      listOfProductId: this.currentListOfProduct.id,
      userId: this.currentUser.id,
    }).subscribe(r => {
      this.shoppingDataStore.setCurrentListOfProduct({ currentListOfProduct: r.body });
    });
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

  onChangeCurrentListOfProductName($event) {
    const listOfProductName = $event.target.value;

    this.listOfProductService.setNameOfListOfProduct({
      name: listOfProductName,
      listOfProductId: this.currentListOfProduct.id
    }).subscribe(r => {
      this.shoppingDataStore.setNameOfCurrentListOfProduct({ name: listOfProductName });
    })
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

  makeListOfProductNameFirstLettreUppercased(name: string) {
    this.currentListOfProduct.name = name.charAt(0).toUpperCase();
  }



}
