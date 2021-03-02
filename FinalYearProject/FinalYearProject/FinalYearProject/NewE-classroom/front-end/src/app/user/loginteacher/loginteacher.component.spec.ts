import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { loginteacherComponent } from './loginteacher.component';

describe('LoginComponent', () => {
  let component: loginteacherComponent;
  let fixture: ComponentFixture<loginteacherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ loginteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(loginteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
