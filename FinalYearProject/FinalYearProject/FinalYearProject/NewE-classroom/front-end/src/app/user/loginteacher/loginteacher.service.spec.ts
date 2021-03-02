import { TestBed } from '@angular/core/testing';

import { LoginteacherService } from './loginteacher.service';

describe('LoginService', () => {
  let service: LoginteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
