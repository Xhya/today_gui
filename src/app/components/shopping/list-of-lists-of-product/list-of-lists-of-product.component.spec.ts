import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfListsOfProductComponent } from './list-of-lists-of-product.component';

describe('ListOfListsOfProductComponent', () => {
  let component: ListOfListsOfProductComponent;
  let fixture: ComponentFixture<ListOfListsOfProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfListsOfProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfListsOfProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
