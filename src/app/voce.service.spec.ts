import { TestBed } from '@angular/core/testing';

import { VoceService } from './voce.service';

describe('VoceService', () => {
  let service: VoceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
