import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {Flower} from '../model/flower';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  private backendUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public addflower(flower: Flower): Observable<Flower> {
    return this.http.post<Flower>(`${this.backendUrl}/flower`, flower);
  }

  public deleteFlower(flowerId: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/flower/${flowerId}`);
  }

  public getflower(flowerId: number): Observable<Flower> {
    return this.http.get<Flower>(`${this.backendUrl}/flower/${flowerId}`);
  }

  public updateFlower(flower: Flower): Observable<Flower> {
    return this.http.put<Flower>(`${this.backendUrl}/flower`, flower);
  }
}
