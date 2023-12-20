import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseComponent } from './please.component';

describe('PleaseComponent', () => {
  let component: PleaseComponent;
  let fixture: ComponentFixture<PleaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PleaseComponent]
    });
    fixture = TestBed.createComponent(PleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
