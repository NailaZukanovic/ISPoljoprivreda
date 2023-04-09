import { TestBed } from '@angular/core/testing';

import { PesticidiService } from './pesticidi.service';

describe('PesticidiService', () => {
  let service: PesticidiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesticidiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
