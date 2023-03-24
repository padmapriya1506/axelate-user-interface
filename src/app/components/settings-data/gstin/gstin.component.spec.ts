import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstinComponent } from './gstin.component';

describe('GstinComponent', () => {
  let component: GstinComponent;
  let fixture: ComponentFixture<GstinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
