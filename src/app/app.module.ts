import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ListOfShoppingListsComponent } from './components/shopping/list-of-shopping-lists/list-of-shopping-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ListOfShoppingListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
