import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Downloadvideolec2Component } from './downloadvideolec2.component';

describe('Downloadvideolec2Component', () => {
  let component: Downloadvideolec2Component;
  let fixture: ComponentFixture<Downloadvideolec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Downloadvideolec2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Downloadvideolec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
