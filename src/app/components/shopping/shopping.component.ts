import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getIsMobileScreen } from 'src/app/helpers/style.helper';
import UserStore from 'src/app/store/User/user.store';
import ShoppingNavigationStore from 'src/app/store/Shopping/Navigation/navigation.store';

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

    constructor(private userStore: UserStore, private shoppingNavigationStore: ShoppingNavigationStore) {
        this.shoppingNavigation$ = shoppingNavigationStore.state$;
    }

    ngOnInit(): void {
        this.initUser();
    }

    initUser() {
        this.userStore.state$.subscribe((r) => {
            this.currentUser = r.user;
        });
    }

    getIsMobileScreen() {
        return getIsMobileScreen();
    }
}
