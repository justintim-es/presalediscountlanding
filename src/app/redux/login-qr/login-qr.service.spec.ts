import { TestBed } from '@angular/core/testing';

import { LoginQrService } from './login-qr.service';

describe('LoginQrService', () => {
  let service: LoginQrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginQrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
