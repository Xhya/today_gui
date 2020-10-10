import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SHOPPING_PAGE_NAMES } from 'src/app/helpers/navigation.helper';
import { setPageToListOfLists } from 'src/app/ngrx/actions/Shopping/navigation.action';

@Component({
  selector: 'app-list-of-product',
  templateUrl: './list-of-product.component.html',
  styleUrls: ['./list-of-product.component.scss']
})
export class ListOfProductComponent implements OnInit {
  SHOPPING_PAGE_NAMES = SHOPPING_PAGE_NAMES;
  shoppingNavigation$: Observable<any>;

  isSearchActive: boolean = false;

  constructor(
    private store: Store<{ user, shoppingNavigation }>
  ) { 
    this.shoppingNavigation$ = store.select(state => state.shoppingNavigation.pageName);
  }

  ngOnInit(): void {
  }

  onClickGoBack() {
    this.store.dispatch(setPageToListOfLists());
  }

  onClickPlusButton() {
    this.isSearchActive = !this.isSearchActive;
  }

}
