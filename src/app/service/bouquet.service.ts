import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bouquet} from '../model/bouquet';

@Injectable({
  providedIn: 'root'
})
export class BouquetService {
  private backendUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public addBouquet(bouquet: Bouquet): Observable<Bouquet> {
    return this.http.post<Bouquet>(`${this.backendUrl}/bouquet`, bouquet);
  }

  public deleteBouquet(bouquetId: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/bouquet/${bouquetId}`);
  }

  public getBouquet(bouquetId: number): Observable<Bouquet> {
    return this.http.get<Bouquet>(`${this.backendUrl}/bouquet/${bouquetId}`);
  }

  public updateBouquet(bouquet: Bouquet): Observable<Bouquet> {
    return this.http.put<Bouquet>(`${this.backendUrl}/bouquet`, bouquet);
  }
}
