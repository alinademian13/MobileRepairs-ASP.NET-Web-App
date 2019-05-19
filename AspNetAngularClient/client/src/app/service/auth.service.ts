import { Injectable, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthService {
  onLoggedOut: EventEmitter<any> = new EventEmitter<any>();
  onLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  @Input() Name: string;
  @Input() Password: string;
  base: string = environment.apiurl;
  constructor(private http: HttpClient) {
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isAuth() {
    return this.getToken() != null;
  }

  logout() {
    localStorage.removeItem("token");
    this.onLoggedOut.emit();
  }

  private setToken(token: string) {
    localStorage.setItem("token", token);
  }

  login(Name: string, Password: string) {
  
    //let body = new URLSearchParams();
    //body.set('grant_type', 'password');
    //body.set('username', Name);
    //body.set('password', Password);
    //const formData = new FormData();
    //formData.append('grant_type', 'password');
    //formData.append('username', 'test');
    //formData.append('password', 'test');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

   let body = `grant_type=password&username=${Name}&password=${Password}`;
    return this.http.post<any>(this.base + "/login",
      body, options).toPromise().then(rsp => {
        this.setToken(rsp.access_token);
        this.onLoggedIn.emit();
        return rsp;
      });
  }
}

