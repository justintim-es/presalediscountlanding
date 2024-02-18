import { TestBed } from '@angular/core/testing';

import { LoginDashboardService } from './login-dashboard.service';

describe('LoginDashboardService', () => {
  let service: LoginDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
