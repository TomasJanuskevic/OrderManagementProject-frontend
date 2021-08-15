import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers(): void {
    this.userService.getUser(1).subscribe((response: User) => {
      this.customers = response.customers;
      console.log(this.customers);
    });
  }

  public deleteCustomer(customerId: number, name: string, lastName: string): void {
    if (confirm('Are you sure to delete ' + name + ' ' + lastName)) {
      this.customerService.deleteCustomer(customerId).subscribe(
        (response: void) => {
          console.log(response);
          this.getCustomers();
        },
        (error) => console.log(error)
      );
    }
  }

  public goToAddCustomer(): void {
    this.router.navigate(['add-customer']);
  }

  public goToInfoCustomer(customerId: number): void {
    this.router.navigate(['info-customer', customerId]);
  }
}
