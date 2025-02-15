import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFailedComponent } from './demo-failed.component';

describe('DemoFailedComponent', () => {
  let component: DemoFailedComponent;
  let fixture: ComponentFixture<DemoFailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFailedComponent]
    });
    fixture = TestBed.createComponent(DemoFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
