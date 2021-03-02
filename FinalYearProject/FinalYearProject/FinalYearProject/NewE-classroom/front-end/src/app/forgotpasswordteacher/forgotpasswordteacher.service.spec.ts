import { TestBed } from '@angular/core/testing';

import { ForgotpasswordteacherService } from './forgotpasswordteacher.service';

describe('ForgotpasswordService', () => {
  let service: ForgotpasswordteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotpasswordteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
