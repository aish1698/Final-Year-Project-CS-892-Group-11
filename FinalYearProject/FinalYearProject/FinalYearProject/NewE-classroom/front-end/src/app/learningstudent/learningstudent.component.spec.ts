import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningstudentComponent } from './learningstudent.component';

describe('LearningstudentComponent', () => {
  let component: LearningstudentComponent;
  let fixture: ComponentFixture<LearningstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
