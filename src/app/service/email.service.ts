import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private backendUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public sendEmail(customer: Customer, orderId: number): Observable<void> {
    return this.http.post<void>(`${this.backendUrl}/email/${orderId}`, customer);
  }
}
