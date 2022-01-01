import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasehistoryComponent } from './purchasehistory.component';

describe('PurchasehistoryComponent', () => {
  let component: PurchasehistoryComponent;
  let fixture: ComponentFixture<PurchasehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasehistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
