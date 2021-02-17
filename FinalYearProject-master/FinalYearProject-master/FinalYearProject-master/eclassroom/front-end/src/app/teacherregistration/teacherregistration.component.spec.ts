import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { teacherregistrationComponent } from './teacherregistration.component';

describe('TeacherregistrationComponent', () => {
  let component: teacherregistrationComponent;
  let fixture: ComponentFixture<teacherregistrationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ teacherregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(teacherregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
