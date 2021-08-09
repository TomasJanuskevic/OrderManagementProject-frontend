import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private backendUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.backendUrl}/order`, order);
  }
}
