import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBuyComponent } from './demo-buy.component';

describe('DemoBuyComponent', () => {
  let component: DemoBuyComponent;
  let fixture: ComponentFixture<DemoBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoBuyComponent]
    });
    fixture = TestBed.createComponent(DemoBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
