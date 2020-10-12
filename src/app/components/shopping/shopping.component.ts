import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsMobileScreen } from 'src/app/helpers/style.helper';

import { ListOfProductService } from 'src/app/services/Shopping/listOfProduct.service';

import { UserI } from 'src/app/_types/user';

import { SHOPPING_PAGE_NAMES } from '../../helpers/navigation.helper';
@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
    SHOPPING_PAGE_NAMES = SHOPPING_PAGE_NAMES;

    user$: Observable<any>;
    shoppingNavigation$: Observable<any>;

    currentUser: UserI;

    constructor(
      private readonly listOfProductService: ListOfProductService,
      private store: Store<{ user, shoppingNavigation }>)
    {  
      this.user$ = store.select('user');
      this.shoppingNavigation$ = store.select(state => state.shoppingNavigation.pageName);
    }

    ngOnInit(): void {
      this.initUser();
    }

    initUser() {
      this.user$.subscribe((r) => {
        this.currentUser = r['user'];
      });
    }
  
    getIsMobileScreen() {
      return getIsMobileScreen();
    }
}
