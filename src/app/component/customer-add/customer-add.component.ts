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

  constructor(private router: Router, private userService: UserService, private customerService: CustomerService) {
  }

  user: User = new User();
  customer: Customer = new Customer();

  ngOnInit(): void {
    this.userService.getUser(1).subscribe((response: User) => {
      this.user = response;
      console.log(this.user);
    });
  }

  public create(): void {
    this.customer.user = this.user;
    console.log(this.customer);
    this.customerService.addCustomer(this.customer).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.customer = new Customer();
    this.goToCustomerList();
  }

  private goToCustomerList(): void {
    this.router.navigate(['customers']);
  }

}