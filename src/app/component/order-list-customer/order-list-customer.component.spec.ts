import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListCustomerComponent } from './order-list-customer.component';

describe('OrderListCustomerComponent', () => {
  let component: OrderListCustomerComponent;
  let fixture: ComponentFixture<OrderListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderListCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
