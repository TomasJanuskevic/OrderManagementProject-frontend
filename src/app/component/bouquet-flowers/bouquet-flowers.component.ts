import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {BouquetService} from '../../service/bouquet.service';
import {Bouquet} from '../../model/bouquet';
import {User} from '../../model/user';
import {BouquetFlower} from '../../model/bouquetFlower';
import {BouquetFlowerService} from '../../service/bouquet-flower.service';

@Component({
  selector: 'app-bouquet-flowers',
  templateUrl: './bouquet-flowers.component.html',
  styleUrls: ['./bouquet-flowers.component.css']
})
export class BouquetFlowersComponent implements OnInit {
  bouquetId: number;
  bouquet: Bouquet = new Bouquet();
  user: User = new User();
  bouquetFlower: BouquetFlower = new BouquetFlower();

  constructor(private route: ActivatedRoute, private router: Router, private bouquetService: BouquetService,
              private userService: UserService, private bouquetFlowerService: BouquetFlowerService) {
  }

  ngOnInit(): void {
    this.bouquetId = this.route.snapshot.params.bouquetId;
    this.getUser();
    this.getBouquet();
  }

  public getUser(): void {
    this.userService.getUser(1).subscribe((response: User) => {
        this.user = response;
        console.log(this.user);
      },
      (error) => console.log(error)
    );
  }

  public getBouquet(): void {
    this.bouquetService.getBouquet(this.bouquetId).subscribe((response: Bouquet) => {
        this.bouquet = response;
        console.log(this.bouquet);
      },
      (error) => console.log(error)
    );
  }

  public addNewFlower(): void {
    this.bouquetFlower.bouquet = this.bouquet;
    this.bouquetFlowerService.addBouquetFlower(this.bouquetFlower).subscribe(
      (response) => {
        console.log(response);
        this.bouquetFlower = new BouquetFlower();
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }

  public deleteBouquetFlower(bouquetFlower: number, flower: string, color: string): void {
    if (confirm('Are you sure to delete ' + flower + ' ' + color)) {
      this.bouquetFlowerService.deleteBouquetFlower(bouquetFlower).subscribe(
        (response: void) => {
          console.log(response);
          this.getBouquet();
        },
        (error) => console.log(error)
      );
    }
  }
}
