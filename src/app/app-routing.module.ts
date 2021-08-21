import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './component/customer-list/customer-list.component';
import {MainpageComponent} from './component/mainpage/mainpage.component';
import {CustomerAddComponent} from './component/customer-add/customer-add.component';
import {CustomerInfoComponent} from './component/customer-info/customer-info.component';
import {FlowerListComponent} from './component/flower-list/flower-list.component';
import {FlowerAddComponent} from './component/flower-add/flower-add.component';
import {FlowerEditComponent} from './component/flower-edit/flower-edit.component';
import {NewOrderComponent} from './component/new-order/new-order.component';
import {OrderCustomerComponent} from './component/order-customer/order-customer.component';
import {OrderInfoComponent} from './component/order-info/order-info.component';
import {OrderBouquetsComponent} from './component/order-bouquets/order-bouquets.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainpageComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'add-customer', component: CustomerAddComponent},
  {path: 'info-customer/:customerId', component: CustomerInfoComponent},
  {path: 'flowers', component: FlowerListComponent},
  {path: 'add-flower', component: FlowerAddComponent},
  {path: 'edit-flower/:flowerId', component: FlowerEditComponent},
  {path: 'new-order', component: NewOrderComponent},
  {path: 'order-customer/:customerId', component: OrderCustomerComponent},
  {path: 'info-order/:customerId/:orderId', component: OrderInfoComponent},
  {path: 'order-bouquets/:orderId', component: OrderBouquetsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
