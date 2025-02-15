import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeFailureComponent } from './stripe-failure.component';

describe('StripeFailureComponent', () => {
  let component: StripeFailureComponent;
  let fixture: ComponentFixture<StripeFailureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StripeFailureComponent]
    });
    fixture = TestBed.createComponent(StripeFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
