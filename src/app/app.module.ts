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
import { OrderListCustomerComponent } from './component/order-list-customer/order-list-customer.component';
import { NewOrderComponent } from './component/new-order/new-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import { NewOrderAddFlowersComponent } from './component/new-order-add-flowers/new-order-add-flowers.component';




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
    OrderListCustomerComponent,
    NewOrderComponent,
    NewOrderAddFlowersComponent,
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
