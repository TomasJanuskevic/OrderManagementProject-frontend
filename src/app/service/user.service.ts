import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getUser(userId: number): Observable<User>{
    return this.http.get<User>(`${this.backendUrl}/user/${userId}`);
  }
}
