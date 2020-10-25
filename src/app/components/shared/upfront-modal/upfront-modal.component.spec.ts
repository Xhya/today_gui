import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpfrontModalComponent } from './upfront-modal.component';

describe('UpfrontModalComponent', () => {
  let component: UpfrontModalComponent;
  let fixture: ComponentFixture<UpfrontModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpfrontModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpfrontModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
