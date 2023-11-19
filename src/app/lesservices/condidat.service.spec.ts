import { TestBed } from '@angular/core/testing';

import { CondidatService } from './condidat.service';

describe('CondidatService', () => {
  let service: CondidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
