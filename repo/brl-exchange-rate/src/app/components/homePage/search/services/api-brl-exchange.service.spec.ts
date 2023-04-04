import { TestBed } from '@angular/core/testing';

import { ApiBrlExchangeService } from './api-brl-exchange.service';

describe('ApiBrlExchangeService', () => {
  let service: ApiBrlExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBrlExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
