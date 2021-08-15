import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order.service';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Order} from '../../model/order';
import {User} from '../../model/user';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-order-add-flowers',
  templateUrl: './new-order-add-flowers.component.html',
  styleUrls: ['./new-order-add-flowers.component.css']
})
export class NewOrderAddFlowersComponent implements OnInit {

  constructor(private customerService: CustomerService, private orderService: OrderService,
              private datePipe: DatePipe, private router: Router, private route: ActivatedRoute) {
  }

  user: User = new User();
  customerId: number;
  customer: Customer = new Customer();
  order: Order = new Order();
  dateNgb: NgbDate;

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params.customerId;
    this.getInitialData();
  }

  public getInitialData(): void {
    this.customerService.getCustomer(this.customerId).subscribe(
      (response) => {
        console.log(response);
        this.customer = response;
        this.order = this.customer.orders[this.customer.orders.length - 1];
        const date = new Date(this.order.orderDate);
        this.dateNgb = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
      },
      (error) => console.log(error)
    );
  }
}
