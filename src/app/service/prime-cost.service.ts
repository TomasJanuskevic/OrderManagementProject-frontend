import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class PrimeCostService {
  private backendUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getOrderPrimeCost(orderId: number): Observable<number> {
    return this.http.get<number>(`${this.backendUrl}/orderPrimeCost/${orderId}`);
  }
}
