import {Component, OnInit} from '@angular/core';
import {FlowerService} from '../../service/flower.service';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {Flower} from '../../model/flower';
import {User} from '../../model/user';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent implements OnInit {
  flowers: Flower[];

  constructor(private flowerService: FlowerService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getFlowers();
  }

  public getFlowers(): void {
    this.userService.getUser(1).subscribe((response: User) => {
      this.flowers = response.flowers;
      console.log(this.flowers);
    });
  }

  public deleteFlower(flowerId: number, flower: string, color: string): void {
    if (confirm('Are you sure to delete ' + flower + ' ' + color)) {
      this.flowerService.deleteFlower(flowerId).subscribe(
        (response: void) => {
          console.log(response);
          this.getFlowers();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public goToAddFlower(): void {
    this.router.navigate(['add-flower']);
  }

  public goToEditFlower(flowerId: number): void {
    this.router.navigate(['edit-flower', flowerId]);
  }

}
