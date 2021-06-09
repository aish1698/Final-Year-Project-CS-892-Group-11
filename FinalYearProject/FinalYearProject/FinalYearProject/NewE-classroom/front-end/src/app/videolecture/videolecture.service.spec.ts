import { TestBed } from '@angular/core/testing';

import { VideolectureService } from './videolecture.service';

describe('VideolectureService', () => {
  let service: VideolectureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideolectureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
