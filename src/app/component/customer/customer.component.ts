import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Customer} from '../../model/customer';
import {TokenStorageService} from '../../service/token-storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  user: User;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService) {
  }
  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
    this.getCustomers();
  }

  public getCustomers(): void {
    this.userService.getUser(this.user.userId).subscribe((response: User) => {
      this.customers = response.customers;
      console.log(this.customers);
    });
  }

}
