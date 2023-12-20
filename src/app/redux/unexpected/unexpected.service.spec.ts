import { TestBed } from '@angular/core/testing';

import { UnexpectedService } from './unexpected.service';

describe('UnexpectedService', () => {
  let service: UnexpectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnexpectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
