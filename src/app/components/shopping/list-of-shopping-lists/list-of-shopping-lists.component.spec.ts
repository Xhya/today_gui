import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfShoppingListsComponent } from './list-of-shopping-lists.component';

describe('ListOfShoppingListsComponent', () => {
  let component: ListOfShoppingListsComponent;
  let fixture: ComponentFixture<ListOfShoppingListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfShoppingListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfShoppingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
