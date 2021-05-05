import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultdownComponent } from './resultdown.component';

describe('ResultdownComponent', () => {
  let component: ResultdownComponent;
  let fixture: ComponentFixture<ResultdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
