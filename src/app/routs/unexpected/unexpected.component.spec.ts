import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnexpectedComponent } from './unexpected.component';

describe('UnexpectedComponent', () => {
  let component: UnexpectedComponent;
  let fixture: ComponentFixture<UnexpectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnexpectedComponent]
    });
    fixture = TestBed.createComponent(UnexpectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
