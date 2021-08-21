import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-new-order-add-flowers',
  templateUrl: './order-customer.component.html',
  styleUrls: ['./order-customer.component.css']
})
export class OrderCustomerComponent implements OnInit {
  customerId: number;
  customer: Customer = new Customer();
  dateNgb: NgbDate;

  constructor(private customerService: CustomerService, private orderService: OrderService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params.customerId;
    this.getCustomer();
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

  public deleteOrder(orderId: number): void {
    if (confirm('Are you sure to delete order')) {
      this.orderService.deleteOrder(orderId).subscribe(
        (response: void) => {
          console.log(response);
          this.getCustomer();
        },
        (error) => console.log(error)
      );
    }
  }

  public goToInfoOrder(customerId: number, orderId: number): void {
    this.router.navigate(['info-order', customerId, orderId]);
  }

  public goToBouquetsOrder(orderId: number): void {
    this.router.navigate(['order-bouquets', orderId]);
  }
}


