import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../model/order';
import {OrderService} from '../../service/order.service';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {

  constructor(private orderService: OrderService, private customerService: CustomerService, private route: ActivatedRoute,
              private router: Router, private datePipe: DatePipe) {
  }

  orderId: number;
  customerId: number;
  customer: Customer = new Customer();
  order: Order = new Order();
  dateNgb: NgbDate;

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params.orderId;
    this.customerId = this.route.snapshot.params.customerId;
    this.getOrder();
    this.getCustomer();
  }

  public getOrder(): void {
    this.orderService.getOrder(this.orderId).subscribe(
      (response) => {
        console.log(response);
        this.order = response;
        const date = new Date(this.order.orderDate);
        this.dateNgb = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
      },
      (error) => console.log(error)
    );
  }

  public getCustomer(): void {
    this.customerService.getCustomer(this.customerId).subscribe(
      (response) => {
        console.log(response);
        this.customer = response;
      },
      (error) => console.log(error)
    );
  }

  public editOrder(): void {
    this.order.orderDate = this.datePipe.transform(new Date(this.dateNgb.year, this.dateNgb.month - 1, this.dateNgb.day), 'yyyy-MM-dd');
    this.order.customer = this.customer;
    this.orderService.updateOrder(this.order).subscribe(
      (response: Order) => {
        console.log(response);
        this.order = new Order();
        this.goToCustomerOrders();
      },
      (error) => console.log(error)
    );
  }

  private goToCustomerOrders(): void {
    this.router.navigate(['order-customer', this.customer.customerId]);
  }

}
