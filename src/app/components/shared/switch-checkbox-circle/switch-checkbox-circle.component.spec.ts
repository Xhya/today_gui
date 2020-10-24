import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCheckboxCircleComponent } from './switch-checkbox-circle.component';

describe('SwitchCheckboxCircleComponent', () => {
  let component: SwitchCheckboxCircleComponent;
  let fixture: ComponentFixture<SwitchCheckboxCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCheckboxCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCheckboxCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
