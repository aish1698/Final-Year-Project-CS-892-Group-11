import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentchapterComponent } from './assignmentchapter.component';

describe('ChapterComponent', () => {
  let component: AssignmentchapterComponent;
  let fixture: ComponentFixture<AssignmentchapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentchapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentchapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
