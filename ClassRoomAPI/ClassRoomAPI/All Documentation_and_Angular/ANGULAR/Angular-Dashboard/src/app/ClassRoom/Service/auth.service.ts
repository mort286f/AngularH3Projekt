import { Injectable } from '@angular/core';
import {HttpParams,HttpHeaders,HttpClient, HttpClientModule} from '@angular/common/http';
import {observable, Observable,} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

let params = new HttpParams()


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public cookieService: CookieService, public jwtHelper: JwtHelperService, public http: HttpClient) { }

  isAuthenticated(){
    const token = this.cookieService.get('jwt');

    return !this.jwtHelper.isTokenExpired(token);
  }

  //Calls the login function on the API
  login(username: string, password: string): Observable<any> {
    params=params.set("username", username);
    params=params.set("password", password);
    return this.http.get('http://localhost:19113/api/Login/Login', {params})

  }

  //Calls the register function on the API
  register(username: string, password: string): Observable<any>{
    const body = {Username: username, Password: password}
    return this.http.post('http://localhost:19113/api/Login/Register', body, {
      headers: new HttpHeaders().set('Content-type', 'application/json')
    })
  }
}
