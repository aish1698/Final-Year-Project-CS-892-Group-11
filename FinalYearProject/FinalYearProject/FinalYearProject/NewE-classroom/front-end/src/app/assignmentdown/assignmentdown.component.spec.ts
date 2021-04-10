import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentdownComponent } from './assignmentdown.component';

describe('AssignmentdownComponent', () => {
  let component: AssignmentdownComponent;
  let fixture: ComponentFixture<AssignmentdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
