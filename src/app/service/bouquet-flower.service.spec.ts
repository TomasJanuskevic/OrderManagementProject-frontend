import { TestBed } from '@angular/core/testing';

import { BouquetFlowerService } from './bouquet-flower.service';

describe('BouquetFlowerService', () => {
  let service: BouquetFlowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BouquetFlowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
