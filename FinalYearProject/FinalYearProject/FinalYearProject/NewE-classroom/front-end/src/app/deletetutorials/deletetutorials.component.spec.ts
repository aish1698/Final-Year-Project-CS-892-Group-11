import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetutorialsComponent } from './deletetutorials.component';

describe('DeletetutorialsComponent', () => {
  let component: DeletetutorialsComponent;
  let fixture: ComponentFixture<DeletetutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
