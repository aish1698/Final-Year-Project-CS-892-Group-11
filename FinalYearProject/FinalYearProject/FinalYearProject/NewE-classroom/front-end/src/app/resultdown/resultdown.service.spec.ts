import { TestBed } from '@angular/core/testing';

import { ResultdownService } from './resultdown.service';

describe('ResultdownService', () => {
  let service: ResultdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
