import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoginQrCodeComponent } from './main-login-qr-code.component';

describe('MainLoginQrCodeComponent', () => {
  let component: MainLoginQrCodeComponent;
  let fixture: ComponentFixture<MainLoginQrCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLoginQrCodeComponent]
    });
    fixture = TestBed.createComponent(MainLoginQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
