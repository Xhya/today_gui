import { Component, OnInit } from '@angular/core';
import { ListOfProductService } from 'src/app/services/Shopping/listOfProduct.service';

interface ListOfProductI {
  id: string,
  name: string,
  products: ProductI[] 
}
  
interface ProductI {
  id: string,
  name: string,
}

@Component({
  selector: 'app-list-of-lists-of-product',
  templateUrl: './list-of-lists-of-product.component.html',
  styleUrls: ['./list-of-lists-of-product.component.scss']
})
  
export class ListOfListsOfProductComponent implements OnInit {
  listOfListsOfProduct: ListOfProductI[];

  constructor(
    private readonly listOfProductService: ListOfProductService
  ) {
    this.listOfListsOfProduct = [];
   }

  ngOnInit(): void {
  }

  async onClickCreateListOfProduct() {
    const response = await this.listOfProductService.create({ name: "test" }).toPromise();
    this.listOfListsOfProduct.push(response.body);
  }

}
