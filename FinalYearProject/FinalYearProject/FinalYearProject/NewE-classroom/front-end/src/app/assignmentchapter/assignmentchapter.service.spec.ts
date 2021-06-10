import { TestBed } from '@angular/core/testing';

import { AssignmentchapterService } from './assignmentchapter.service';

describe('AssignmentchapterService', () => {
  let service: AssignmentchapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentchapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
