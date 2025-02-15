import { TestBed } from '@angular/core/testing';

import { DeductService } from './deduct.service';

describe('DeductService', () => {
  let service: DeductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
