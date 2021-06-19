import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadvideolecComponent } from './downloadvideolec.component';

describe('DownloadvideolecComponent', () => {
  let component: DownloadvideolecComponent;
  let fixture: ComponentFixture<DownloadvideolecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadvideolecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadvideolecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
