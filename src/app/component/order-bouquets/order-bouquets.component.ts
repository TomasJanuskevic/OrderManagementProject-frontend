import {Component, OnInit} from '@angular/core';
import {BouquetService} from '../../service/bouquet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../model/order';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-order-bouquets',
  templateUrl: './order-bouquets.component.html',
  styleUrls: ['./order-bouquets.component.css']
})
export class OrderBouquetsComponent implements OnInit {
  orderId: number;
  order: Order = new Order();

  constructor(private orderService: OrderService, private bouquetService: BouquetService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params.orderId;
    this.getOrder();
  }

  public getOrder(): void {
    this.orderService.getOrder(this.orderId).subscribe(
      (response) => {
        console.log(response);
        this.order = response;
      },
      (error) => console.log(error)
    );
  }

  public deleteBouquet(bouquetId: number): void {
    if (confirm('Are you sure to delete bouquet?')) {
      this.bouquetService.deleteBouquet(bouquetId).subscribe(
        (response: void) => {
          console.log(response);
          this.getOrder();
        },
        (error) => console.log(error)
      );
    }
  }

  public goToBouquetInfo(bouquetId: number): void {
    this.router.navigate(['bouquet-info', this.orderId, bouquetId]);
  }

  public goToAddBouquet(): void {
    this.router.navigate(['bouquet-add', this.orderId]);
  }

  public goToBouquetFlowers(bouquetId: number): void {
    this.router.navigate(['bouquet-flowers', bouquetId]);
  }

}
