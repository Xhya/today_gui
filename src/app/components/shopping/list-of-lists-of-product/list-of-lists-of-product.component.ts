import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ListOfProductService } from 'src/app/services/Shopping/listOfProduct.service';

import ShoppingDataStore from 'src/app/store/Shopping/Data/data.store';
import ShoppingNavigationStore from 'src/app/store/Shopping/Navigation/navigation.store';
import UserStore from 'src/app/store/User/user.store';

import { ListOfProductI } from 'src/app/_types/listOfProduct';
import { UserI } from 'src/app/_types/user';

@Component({
    selector: 'app-list-of-lists-of-product',
    templateUrl: './list-of-lists-of-product.component.html',
    styleUrls: ['./list-of-lists-of-product.component.scss'],
})
export class ListOfListsOfProductComponent implements OnInit {
    user$: Observable<any>;
    shoppingData$: Observable<any>;

    currentUser: UserI;
    recentlyUsedProducts: ProductOfListI[];

    constructor(
        private readonly listOfProductService: ListOfProductService,
        private readonly userStore: UserStore,
        private readonly shoppingDataStore: ShoppingDataStore,
        private readonly shoppingNavigationStore: ShoppingNavigationStore,
    ) {
        this.shoppingData$ = shoppingDataStore.state$;
    }

    ngOnInit(): void {
        this.initStore();
    }

    initStore() {
        this.userStore.state$.subscribe((r) => {
            this.currentUser = r.user;
            this.initListOfProduct();
            this.initRecentlyUser();
        });
    }

    initListOfProduct() {
        if (this.currentUser) {
            this.listOfProductService.getByUserId({ userId: this.currentUser.id }).subscribe((r) => {
                this.shoppingDataStore.setListOfProduct({ listOfListOfProduct: r.body });
            });
        }
    }

    initRecentlyUser() {
        if (this.currentUser) {
            this.listOfProductService.getRecentlyUsedByUserId({ userId: this.currentUser.id }).subscribe((r) => {
                this.recentlyUsedProducts = r.body;
            });
        }
    }

    async onClickCreateListOfProduct() {
        const response = await this.listOfProductService.create({ userId: this.currentUser.id }).toPromise();
        this.shoppingDataStore.addListOfProduct({ listOfProduct: response.body });
        this.shoppingNavigationStore.setPageToListOfProduct();
        this.shoppingDataStore.setCurrentListOfProduct({ currentListOfProduct: response.body });
    }

    onClickListOfProduct(listOfProduct: ListOfProductI) {
        this.shoppingNavigationStore.setPageToListOfProduct();
        this.shoppingDataStore.setCurrentListOfProduct({ currentListOfProduct: listOfProduct });
    }
}
