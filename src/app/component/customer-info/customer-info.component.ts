import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  user: User = new User();
  public customerId: number;
  public customer: Customer = new Customer();

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService,
              private userService: UserService) {
  }

  ngOnInit(): void {
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
        this.goToCustomerList();
      },
      (error) => console.log(error)
    );
  }

  private goToCustomerList(): void {
    this.router.navigate(['customers']);
  }

}
