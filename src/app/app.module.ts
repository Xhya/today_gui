import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import userReducer from './ngrx/reducers/user.reducer';
import shoppingDataReducer from './ngrx/reducers/Shopping/data.reducer';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ListOfListsOfProductComponent } from './components/shopping/list-of-lists-of-product/list-of-lists-of-product.component';
import { ListOfProductComponent } from './components/shopping/list-of-product/list-of-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ListOfListsOfProductComponent,
    ListOfProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer, shoppingData: shoppingDataReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
