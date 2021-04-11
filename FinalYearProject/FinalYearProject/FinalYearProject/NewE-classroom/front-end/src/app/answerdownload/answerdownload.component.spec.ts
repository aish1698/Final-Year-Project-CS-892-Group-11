import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerdownloadComponent } from './answerdownload.component';

describe('AnswerdownloadComponent', () => {
  let component: AnswerdownloadComponent;
  let fixture: ComponentFixture<AnswerdownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerdownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
