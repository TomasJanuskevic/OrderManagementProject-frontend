import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private backendUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.backendUrl}/customer`, customer);
  }

  public deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/customer/${customerId}`);
  }

  public getCustomer(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.backendUrl}/customer/${customerId}`);
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.backendUrl}/customer`, customer);
  }
}
