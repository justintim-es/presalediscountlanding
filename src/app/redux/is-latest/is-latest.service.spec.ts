import { TestBed } from '@angular/core/testing';

import { IsLatestService } from './is-latest.service';

describe('IsLatestService', () => {
  let service: IsLatestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLatestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
