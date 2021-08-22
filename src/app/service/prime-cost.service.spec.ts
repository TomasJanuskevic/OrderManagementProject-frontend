import { TestBed } from '@angular/core/testing';

import { PrimeCostService } from './prime-cost.service';

describe('PrimeCostService', () => {
  let service: PrimeCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
