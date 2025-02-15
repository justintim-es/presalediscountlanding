import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDeductComponent } from './pre-deduct.component';

describe('PreDeductComponent', () => {
  let component: PreDeductComponent;
  let fixture: ComponentFixture<PreDeductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreDeductComponent]
    });
    fixture = TestBed.createComponent(PreDeductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
