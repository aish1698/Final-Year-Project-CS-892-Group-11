import { TestBed } from '@angular/core/testing';

import { AnswerdownloadService } from './answerdownload.service';

describe('AnswerdownloadService', () => {
  let service: AnswerdownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerdownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
