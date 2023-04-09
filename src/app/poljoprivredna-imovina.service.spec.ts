import { TestBed } from '@angular/core/testing';

import { PoljoprivrednaImovinaService } from './poljoprivredna-imovina.service';

describe('PoljoprivrednaImovinaService', () => {
  let service: PoljoprivrednaImovinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoljoprivrednaImovinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
