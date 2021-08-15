import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {Customer} from '../../model/customer';
import {UserService} from '../../service/user.service';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  user: User = new User();
  customer: Customer = new Customer();

  constructor(private router: Router, private userService: UserService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.userService.getUser(1).subscribe((response: User) => {
      this.user = response;
      console.log(this.user);
    });
  }

  public create(): void {
    this.customer.user = this.user;
    this.customerService.addCustomer(this.customer).subscribe(
      (response) => {
        console.log(response);
        this.customer = new Customer();
        this.goToCustomerList();
      },
      (error) => console.log(error)
    );

  }

  private goToCustomerList(): void {
    this.router.navigate(['customers']);
  }

}
