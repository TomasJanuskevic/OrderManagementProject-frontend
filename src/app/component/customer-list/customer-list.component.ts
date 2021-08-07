import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {HttpErrorResponse} from '@angular/common/http';
import {newArray} from '@angular/compiler/src/util';

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


  public deleteCustomer(customerId: number): void {
    this.customerService.deleteCustomer(customerId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCustomers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public goToAddCustomer(): void {
    this.router.navigate(['add-customer']);
  }

  public goToEditCustomer(customerId: number): void {
    this.router.navigate(['edit', customerId]);
  }
}
