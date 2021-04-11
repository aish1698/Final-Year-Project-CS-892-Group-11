import { TestBed } from '@angular/core/testing';

import { AnswerUploadService } from './answer-upload.service';

describe('AnswerUploadService', () => {
  let service: AnswerUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
