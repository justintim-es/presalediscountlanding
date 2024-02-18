import { TestBed } from '@angular/core/testing';

import { MainCreateCardService } from './main-create-card.service';

describe('MainCreateCardService', () => {
  let service: MainCreateCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainCreateCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
