import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolectureComponent } from './videolecture.component';

describe('VideolectureComponent', () => {
  let component: VideolectureComponent;
  let fixture: ComponentFixture<VideolectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideolectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
