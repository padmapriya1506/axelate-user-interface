import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxExemptionsComponent } from './tax-exemptions.component';

describe('TaxExemptionsComponent', () => {
  let component: TaxExemptionsComponent;
  let fixture: ComponentFixture<TaxExemptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxExemptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxExemptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
