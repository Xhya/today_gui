import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ListOfProductService } from 'src/app/services/Shopping/listOfProduct.service';

import { addListOfProduct } from 'src/app/ngrx/actions/Shopping/data.action';
import { UserI } from 'src/app/_types/user';
import { setPageToListOfProduct } from 'src/app/ngrx/actions/Shopping/navigation.action';

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

    async onClickCreateListOfProduct() {
      const response = await this.listOfProductService.create({ name: 'toto', userId: this.currentUser.id }).toPromise();
      this.store.dispatch(addListOfProduct({ listOfProduct: response.body }));
      this.store.dispatch(setPageToListOfProduct());
    }
}
