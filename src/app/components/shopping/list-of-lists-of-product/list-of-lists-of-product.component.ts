import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setListOfProduct } from 'src/app/ngrx/actions/listOfProduct.action';

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
  listOfProduct$: Observable<ListOfProductI[]>
  
  currentUser: UserI;

  constructor(
    private readonly listOfProductService: ListOfProductService,
    private store: Store<{ user: UserI; listOfProduct: any }>,
  ) {
    this.user$ = store.select('user');
    this.listOfProduct$ = store.select(state => state.listOfProduct.listOfProduct);
   }

  ngOnInit(): void {
    this.initStore();
  }

  initStore() {
    this.user$.subscribe(r => {
      this.currentUser = r['user'];
      this.initListOfProduct();
    });
    this.listOfProduct$.subscribe(r => {
      console.log('::  r', r);
    });
  }

  initListOfProduct() {
    if (this.currentUser) {
      this.listOfProductService.getByUserId({ userId: this.currentUser.id }).subscribe(r => {
        this.store.dispatch(setListOfProduct({ listOfProduct: r.body }));
      });
    }
  }

  // async onClickCreateListOfProduct() {
  //   await this.listOfProductService.create({ name: "toto", userId: this.currentUser.id }).toPromise();
  //   this.initListOfProduct();
  // }

}
