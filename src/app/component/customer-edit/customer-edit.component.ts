import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  user: User = new User();
  public customerId: number;
  public customer: Customer;

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.customer = new Customer();
    this.customerId = this.route.snapshot.params.customerId;
    this.customerService.getCustomer(this.customerId).subscribe(
      (response) => {
        console.log(response);
        this.customer = response;
      },
      (error) => console.log(error)
    );
    this.userService.getUser(1).subscribe((response: User) => {
      this.user = response;
      console.log(this.user);
    });
  }

  public editCustomer(): void {
    this.customer.user = this.user;
    this.customerService.updateCustomer(this.customer).subscribe(
      (response: Customer) => {
        console.log(response);
        this.customer = new Customer();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.goToCustomerList();
  }

  private goToCustomerList(): void {
    this.router.navigate(['customers']);
  }

}
