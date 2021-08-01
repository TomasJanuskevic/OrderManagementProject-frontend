import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];

  constructor(private userService: UserService) {
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

}
