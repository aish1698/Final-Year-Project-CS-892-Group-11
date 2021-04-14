import { TestBed } from '@angular/core/testing';

import { CurrentrouteService } from './currentroute.service';

describe('CurrentrouteService', () => {
  let service: CurrentrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
