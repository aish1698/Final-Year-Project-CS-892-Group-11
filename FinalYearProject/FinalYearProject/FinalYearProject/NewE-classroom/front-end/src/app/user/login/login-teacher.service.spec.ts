import { TestBed } from '@angular/core/testing';

import { LoginTeacherService } from './login-teacher.service';

describe('LoginTeacherService', () => {
  let service: LoginTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
