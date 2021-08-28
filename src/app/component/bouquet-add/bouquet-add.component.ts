import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../service/order.service';
import {BouquetService} from '../../service/bouquet.service';
import {Bouquet} from '../../model/bouquet';
import {Order} from '../../model/order';

@Component({
  selector: 'app-bouquet-new',
  templateUrl: './bouquet-add.component.html',
  styleUrls: ['./bouquet-add.component.css']
})
export class BouquetAddComponent implements OnInit {
  orderId: number;
  bouquet: Bouquet = new Bouquet();
  order: Order = new Order();

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService,
              private bouquetService: BouquetService) {
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

  public addBouquet(): void {
    this.bouquet.order = this.order;
    this.bouquetService.addBouquet(this.bouquet).subscribe(
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
