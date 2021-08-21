import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BouquetFlower} from '../model/bouquetFlower';

@Injectable({
  providedIn: 'root'
})
export class BouquetFlowerService {
  private backendUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addBouquetFlower(bouquetFlower: BouquetFlower): Observable<BouquetFlower> {
    return this.http.post<BouquetFlower>(`${this.backendUrl}/bouquetFlower`, bouquetFlower);
  }
}
