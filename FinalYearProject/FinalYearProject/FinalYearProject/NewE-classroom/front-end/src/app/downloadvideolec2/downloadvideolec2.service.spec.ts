import { TestBed } from '@angular/core/testing';

import { Downloadvideolec2Service } from './downloadvideolec2.service';

describe('Downloadvideolec2Service', () => {
  let service: Downloadvideolec2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Downloadvideolec2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
