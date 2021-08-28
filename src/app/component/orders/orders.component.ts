import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {Order} from '../../model/order';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customers: Customer[];
  orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders(): void {
    this.orderService.getOrdersByUserId(1).subscribe((response: Order[]) => {
        this.orders = response;
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  public goToBouquetsOrder(orderId: number): void {
    this.router.navigate(['order-bouquets', orderId]);
  }
}
