import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCreateCardComponent } from './main-create-card.component';

describe('MainCreateCardComponent', () => {
  let component: MainCreateCardComponent;
  let fixture: ComponentFixture<MainCreateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCreateCardComponent]
    });
    fixture = TestBed.createComponent(MainCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
