import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public goToCustomers(): void {
    this.router.navigate(['customers']);
  }

  public goToMain(): void {
    this.router.navigate(['main']);
  }

  public goToFlowers(): void {
    this.router.navigate(['flowers']);
  }

  public goToNewOrder(): void {
    this.router.navigate(['new-order']);
  }

}
