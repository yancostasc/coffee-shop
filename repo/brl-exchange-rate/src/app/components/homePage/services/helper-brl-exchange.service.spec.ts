import { TestBed } from '@angular/core/testing';

import { HelperBrlExchangeService } from './helper-brl-exchange.service';

describe('ModelingDailyExchangeService', () => {
  let service: HelperBrlExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperBrlExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
