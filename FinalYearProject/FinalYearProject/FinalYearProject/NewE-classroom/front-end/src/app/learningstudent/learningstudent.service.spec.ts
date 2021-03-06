import { TestBed } from '@angular/core/testing';

import { LearningstudentService } from './learningstudent.service';

describe('LearningstudentService', () => {
  let service: LearningstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
