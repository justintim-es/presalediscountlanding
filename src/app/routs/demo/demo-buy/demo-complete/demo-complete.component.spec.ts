import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCompleteComponent } from './demo-complete.component';

describe('DemoCompleteComponent', () => {
  let component: DemoCompleteComponent;
  let fixture: ComponentFixture<DemoCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoCompleteComponent]
    });
    fixture = TestBed.createComponent(DemoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
