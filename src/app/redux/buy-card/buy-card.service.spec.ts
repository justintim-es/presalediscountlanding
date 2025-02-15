import { TestBed } from '@angular/core/testing';

import { BuyCardService } from './buy-card.service';

describe('BuyCardService', () => {
  let service: BuyCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
