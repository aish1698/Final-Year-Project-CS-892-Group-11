import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { registerComponent } from './register.component';

describe('registerComponent', () => {
  let component: registerComponent;
  let fixture: ComponentFixture<registerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ registerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
