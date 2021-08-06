import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptions = {
  header: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text' as 'json'
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private backendUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  login(userName: string, password: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/login`, {
      userName,
      password
    }, httpOptions);
  }

}
