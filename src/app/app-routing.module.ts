import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './component/customer-list/customer-list.component';
import {MainpageComponent} from './component/mainpage/mainpage/mainpage.component';
import {CustomerAddComponent} from './component/customer-add/customer-add.component';
import {CustomerEditComponent} from './component/customer-edit/customer-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainpageComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'add-customer', component: CustomerAddComponent},
  { path: 'edit/:customerId', component: CustomerEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
