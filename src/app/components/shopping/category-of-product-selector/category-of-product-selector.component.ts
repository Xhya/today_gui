import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getTextWithFirstLetterUppercased } from 'src/app/helpers/utils/string.utils';
import { CategoryOfProductService } from 'src/app/services/Shopping/categoryOfProduct.service';

@Component({
  selector: 'app-category-of-product-selector',
  templateUrl: './category-of-product-selector.component.html',
  styleUrls: ['./category-of-product-selector.component.scss']
})
export class CategoryOfProductSelectorComponent implements OnInit {
  @Output() triggerCreateProduct = new EventEmitter<any>();

  listOfCategory: CategoryOfProductI[];
  categoryName: string;

  constructor(
    private readonly categoryOfProductService: CategoryOfProductService
  ) { }

  ngOnInit() {
    this.initListOfCategory();
  }

  async initListOfCategory() {
    const response = await this.categoryOfProductService.getAllCategories().toPromise();
    this.listOfCategory = response.body;
  }

  async updateCategoryList() {
    const response = await this.categoryOfProductService.searchCategoryByName({ name: this.categoryName }).toPromise();
    this.listOfCategory = response.body;
  }

  onChangeCategoryName() {
    if (this.categoryName !== "") {
      this.updateCategoryList();
    } else {
      this.initListOfCategory();
    }
  }

  async onClickCreateCategory() {
    if (this.categoryName === "") {
      return;
    }

    const r1 = await this.categoryOfProductService.createCategory({ name: getTextWithFirstLetterUppercased(this.categoryName) }).toPromise();
    this.triggerCreateProduct.emit(r1.body.id);
  }

  async onClickCategoryName(categoryId) {
    this.triggerCreateProduct.emit(categoryId);

  }

}
