import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductComponent } from './deduct.component';

describe('DeductComponent', () => {
  let component: DeductComponent;
  let fixture: ComponentFixture<DeductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeductComponent]
    });
    fixture = TestBed.createComponent(DeductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
