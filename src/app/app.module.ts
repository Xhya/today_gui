import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
