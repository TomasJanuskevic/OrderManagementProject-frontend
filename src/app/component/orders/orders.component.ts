import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {Order} from '../../model/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customers: Customer[];
  orders: Order[] = [];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders(): void {
    this.userService.getUser(1).subscribe((response: User) => {
        for (const customer of response.customers) {
          for (const order of customer.orders) {
            this.orders.push(order);
          }
        }
        console.log(this.customers);
      },
      (error) => console.log(error)
    );
  }

  public goToBouquetsOrder(orderId: number): void {
    this.router.navigate(['order-bouquets', orderId]);
  }
}
