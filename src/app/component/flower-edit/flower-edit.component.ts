import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {FlowerService} from '../../service/flower.service';
import {Customer} from '../../model/customer';
import {User} from '../../model/user';
import {Flower} from '../../model/flower';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-flower-edit',
  templateUrl: './flower-edit.component.html',
  styleUrls: ['./flower-edit.component.css']
})
export class FlowerEditComponent implements OnInit {
  user: User = new User();
  public flowerId: number;
  public flower: Flower;

  constructor(private route: ActivatedRoute, private router: Router, private flowerService: FlowerService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.flower = new Flower();
    this.flowerId = this.route.snapshot.params.flowerId;
    this.flowerService.getflower(this.flowerId).subscribe(
      (response) => {
        console.log(response);
        this.flower = response;
      },
      (error) => console.log(error)
    );
    this.userService.getUser(1).subscribe((response: User) => {
      this.user = response;
      console.log(this.user);
    });
  }

  public editFlower(): void {
    this.flower.user = this.user;
    this.flowerService.updateFlower(this.flower).subscribe(
      (response: Flower) => {
        console.log(response);
        this.flower = new Flower();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.goToFlowerList();
  }

  private goToFlowerList(): void {
    this.router.navigate(['flowers']);
  }

}
