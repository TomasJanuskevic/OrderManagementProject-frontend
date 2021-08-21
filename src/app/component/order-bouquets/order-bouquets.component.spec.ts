import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBouquetsComponent } from './order-bouquets.component';

describe('OrderBouquetsComponent', () => {
  let component: OrderBouquetsComponent;
  let fixture: ComponentFixture<OrderBouquetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBouquetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBouquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
