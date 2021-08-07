import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainpageComponent } from './component/mainpage/mainpage/mainpage.component';
import { CustomerAddComponent } from './component/customer-add/customer-add.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomerListComponent,
    MainpageComponent,
    CustomerAddComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
