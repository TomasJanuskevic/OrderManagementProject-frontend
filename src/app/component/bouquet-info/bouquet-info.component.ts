import {Component, OnInit} from '@angular/core';
import {Bouquet} from '../../model/bouquet';
import {Order} from '../../model/order';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../service/order.service';
import {BouquetService} from '../../service/bouquet.service';
import {Flower} from '../../model/flower';

@Component({
  selector: 'app-bouquet-info',
  templateUrl: './bouquet-info.component.html',
  styleUrls: ['./bouquet-info.component.css']
})
export class BouquetInfoComponent implements OnInit {
  bouquetId: number;
  orderId: number;
  bouquet: Bouquet = new Bouquet();
  order: Order = new Order();

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService,
              private bouquetService: BouquetService) {
  }

  ngOnInit(): void {
    this.bouquetId = this.route.snapshot.params.bouquetId;
    this.orderId = this.route.snapshot.params.orderId;
    this.getOrder();
    this.getBouquet();
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

  public getBouquet(): void {
    this.bouquetService.getBouquet(this.bouquetId).subscribe(
      (response) => {
        console.log(response);
        this.bouquet = response;
      },
      (error) => console.log(error)
    );
  }

  public editBouquet(): void {
    this.bouquet.order = this.order;
    this.bouquetService.updateBouquet(this.bouquet).subscribe(
      (response: Bouquet) => {
        console.log(response);
        this.bouquet = new Bouquet();
        this.goToOrderList();
      },
      (error) => console.log(error)
    );
  }

  private goToOrderList(): void {
    this.router.navigate(['order-bouquets', this.orderId]);
  }

}
