import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ListOfProductService } from 'src/app/services/Shopping/listOfProduct.service';

import { addListOfProduct } from 'src/app/ngrx/actions/listOfProduct.action';
import { UserI } from 'src/app/_types/user';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
    user$: Observable<UserI>;

    currentUser: UserI;

    constructor(private readonly listOfProductService: ListOfProductService, private store: Store<{ user: UserI }>) {
      this.user$ = store.select('user');
    }

    ngOnInit(): void {
        this.initUser();
    }

    initUser() {
      this.user$.subscribe((r) => {
          console.log('r:', r);
            this.currentUser = r['user'];
        });
    }

    async onClickCreateListOfProduct() {
      const response = await this.listOfProductService.create({ name: 'toto', userId: this.currentUser.id }).toPromise();
      console.log(':: -> newListOfProduct', response.body);
      this.store.dispatch(addListOfProduct({ listOfProduct: response.body }));
      
    }
}
