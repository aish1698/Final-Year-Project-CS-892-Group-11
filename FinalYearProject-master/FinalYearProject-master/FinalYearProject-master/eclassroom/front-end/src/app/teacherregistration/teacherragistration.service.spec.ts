import { TestBed } from '@angular/core/testing';

import { teacherregistrationService } from './teacherragistration.service';

describe('teacherregistrationService', () => {
  let service: teacherregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(teacherregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
