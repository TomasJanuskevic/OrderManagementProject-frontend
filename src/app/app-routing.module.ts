import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './component/customer-list/customer-list.component';
import {MainpageComponent} from './component/mainpage/mainpage.component';
import {CustomerAddComponent} from './component/customer-add/customer-add.component';
import {CustomerInfoComponent} from './component/customer-info/customer-info.component';
import {FlowerListComponent} from './component/flower-list/flower-list.component';
import {FlowerAddComponent} from './component/flower-add/flower-add.component';
import {FlowerEditComponent} from './component/flower-edit/flower-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainpageComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'add-customer', component: CustomerAddComponent},
  {path: 'info-customer/:customerId', component: CustomerInfoComponent},
  {path: 'flowers', component: FlowerListComponent},
  {path: 'add-flower', component: FlowerAddComponent},
  {path: 'edit-flower/:flowerId', component: FlowerEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
