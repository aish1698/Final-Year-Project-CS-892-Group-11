import { TestBed } from '@angular/core/testing';

import { AssignmentdownloadService } from './assignmentdownload.service';

describe('AssignmentdownloadService', () => {
  let service: AssignmentdownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentdownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
