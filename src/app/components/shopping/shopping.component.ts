import { Component, OnInit } from '@angular/core';

const SHOPPING_LISTS = [
  { id: 0, name: "Marché"},
  { id: 1, name: "Monop"}
]

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  shoppingLists = SHOPPING_LISTS;
  selectedShoppingListId: number; 
    
  constructor(
  ) { }

  ngOnInit(): void {
  }

  onClickSetSelectedShoppingListId(shoppingListId) {
    this.selectedShoppingListId = shoppingListId;
  };

}
