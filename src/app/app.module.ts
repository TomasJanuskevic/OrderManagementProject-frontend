import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { CustomerAddComponent } from './component/customer-add/customer-add.component';
import { CustomerInfoComponent } from './component/customer-info/customer-info.component';
import { FlowerListComponent } from './component/flower-list/flower-list.component';
import { FlowerAddComponent } from './component/flower-add/flower-add.component';
import { FlowerEditComponent } from './component/flower-edit/flower-edit.component';
import { NewOrderComponent } from './component/new-order/new-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import { OrderCustomerComponent } from './component/order-customer/order-customer.component';
import { OrderInfoComponent } from './component/order-info/order-info.component';
import { OrderBouquetsComponent } from './component/order-bouquets/order-bouquets.component';
import { BouquetInfoComponent } from './component/bouquet-info/bouquet-info.component';
import { BouquetAddComponent } from './component/bouquet-add/bouquet-add.component';
import { BouquetFlowersComponent } from './component/bouquet-flowers/bouquet-flowers.component';
import { OrdersComponent } from './component/orders/orders.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomerListComponent,
    MainpageComponent,
    CustomerAddComponent,
    CustomerInfoComponent,
    FlowerListComponent,
    FlowerAddComponent,
    FlowerEditComponent,
    NewOrderComponent,
    OrderCustomerComponent,
    OrderInfoComponent,
    OrderBouquetsComponent,
    BouquetInfoComponent,
    BouquetAddComponent,
    BouquetFlowersComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
