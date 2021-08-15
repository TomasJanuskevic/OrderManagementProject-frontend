import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {FlowerService} from '../../service/flower.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {Flower} from '../../model/flower';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-flower-add',
  templateUrl: './flower-add.component.html',
  styleUrls: ['./flower-add.component.css']
})
export class FlowerAddComponent implements OnInit {
  user: User = new User();
  flower: Flower = new Flower();

  constructor(private userService: UserService, private flowerService: FlowerService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUser(1).subscribe((response: User) => {
      this.user = response;
      console.log(this.user);
    });
  }

  public create(): void {
    this.flower.user = this.user;
    this.flowerService.addflower(this.flower).subscribe(
      (response) => {
        console.log(response);
        this.flower = new Flower();
        this.goToFlowerList();
      },
      (error) => console.log(error)
    );

  }

  private goToFlowerList(): void {
    this.router.navigate(['flowers']);
  }

}
