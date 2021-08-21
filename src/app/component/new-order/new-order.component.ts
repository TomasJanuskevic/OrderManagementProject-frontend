import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {Order} from '../../model/order';
import {OrderService} from '../../service/order.service';
import {DatePipe} from '@angular/common';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  user: User = new User();
  order: Order = new Order();
  date: NgbDate;

  constructor(private userService: UserService, private orderService: OrderService, private datePipe: DatePipe, private router: Router) {
  }

  ngOnInit(): void {
    this.order.orderStatus = 'GAMINAMAS';
    this.userService.getUser(1).subscribe((response: User) => {
      this.user = response;
      console.log(this.user);
    });
  }

  public createNewOrder(): void {
    this.order.orderDate = this.datePipe.transform(new Date(this.date.year, this.date.month - 1, this.date.day), 'yyyy-MM-dd');
    this.orderService.addOrder(this.order).subscribe(
      (response) => {
        console.log(response);
        this.goOrderCustomer(this.order.customer.customerId);
      },
      (error) => console.log(error)
    );

  }

  public goOrderCustomer(customerId: number): void {
    this.router.navigate(['order-customer', customerId]);
  }
}
