import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordteacherComponent } from './forgotpasswordteacher.component';

describe('ForgotpasswordComponent', () => {
  let component: ForgotpasswordteacherComponent;
  let fixture: ComponentFixture<ForgotpasswordteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpasswordteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
