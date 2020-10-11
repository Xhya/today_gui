import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addListOfProduct, setCurrentListOfProduct, setListOfProduct } from 'src/app/ngrx/actions/Shopping/data.action';
import { setPageToListOfProduct } from 'src/app/ngrx/actions/Shopping/navigation.action';

import { ListOfProductService } from 'src/app/services/Shopping/listOfProduct.service';
import { ListOfProductI } from 'src/app/_types/listOfProduct';
import { UserI } from 'src/app/_types/user';

@Component({
  selector: 'app-list-of-lists-of-product',
  templateUrl: './list-of-lists-of-product.component.html',
  styleUrls: ['./list-of-lists-of-product.component.scss']
})
  
export class ListOfListsOfProductComponent implements OnInit {
  user$: Observable<UserI>
  listOfListOfProduct$: Observable<ListOfProductI[]>
  
  currentUser: UserI;

  constructor(
    private readonly listOfProductService: ListOfProductService,
    private store: Store<{ user: UserI; shoppingData: any }>,
  ) {
    this.user$ = store.select('user');
    this.listOfListOfProduct$ = store.select(state => state.shoppingData.listOfListOfProduct);
   }

  ngOnInit(): void {
    this.initStore();
  }

  initStore() {
    this.user$.subscribe(r => {
      this.currentUser = r['user'];
      this.initListOfProduct();
    });
  }

  initListOfProduct() {
    if (this.currentUser) {
      this.listOfProductService.getByUserId({ userId: this.currentUser.id }).subscribe(r => {
        this.store.dispatch(setListOfProduct({ listOfListOfProduct: r.body }));
      });
    }
  }

  async onClickCreateListOfProduct() {
    const response = await this.listOfProductService.create({ name: 'toto', userId: this.currentUser.id }).toPromise();
    this.store.dispatch(addListOfProduct({ listOfProduct: response.body }));
    this.store.dispatch(setPageToListOfProduct());
    this.store.dispatch(setCurrentListOfProduct({ currentListOfProduct: response.body }));
  }

  onClickListOfProduct(listOfProduct: ListOfProductI) {
    this.store.dispatch(setPageToListOfProduct());
    this.store.dispatch(setCurrentListOfProduct({ currentListOfProduct: listOfProduct }));
  }

}
