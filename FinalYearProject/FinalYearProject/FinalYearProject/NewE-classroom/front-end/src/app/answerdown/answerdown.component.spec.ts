import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerdownComponent } from './answerdown.component';

describe('AnswerdownComponent', () => {
  let component: AnswerdownComponent;
  let fixture: ComponentFixture<AnswerdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
