import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEthComponent } from './main-eth.component';

describe('MainEthComponent', () => {
  let component: MainEthComponent;
  let fixture: ComponentFixture<MainEthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainEthComponent]
    });
    fixture = TestBed.createComponent(MainEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
