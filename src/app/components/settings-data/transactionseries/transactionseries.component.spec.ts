import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionseriesComponent } from './transactionseries.component';

describe('TransactionseriesComponent', () => {
  let component: TransactionseriesComponent;
  let fixture: ComponentFixture<TransactionseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionseriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
