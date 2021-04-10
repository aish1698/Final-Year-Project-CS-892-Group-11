import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentdownloadComponent } from './assignmentdownload.component';

describe('AssignmentdownloadComponent', () => {
  let component: AssignmentdownloadComponent;
  let fixture: ComponentFixture<AssignmentdownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentdownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
