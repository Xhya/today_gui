import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOfProductSelectorComponent } from './category-of-product-selector.component';

describe('CategoryOfProductSelectorComponent', () => {
  let component: CategoryOfProductSelectorComponent;
  let fixture: ComponentFixture<CategoryOfProductSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryOfProductSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryOfProductSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
