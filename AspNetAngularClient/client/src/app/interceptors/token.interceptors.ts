import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from '../service/auth.service';
import { Observable } from "rxjs";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var keys = request.headers.keys();
    var newHeaders = {};
    for (var key in keys) {
      var value = request.headers.get(key);
      newHeaders[key] = value;
    }
    if (!request.url.includes("login") && this.auth.isAuth()) {
      newHeaders['Authorization'] = `Bearer ${this.auth.getToken()}`;
      request = request.clone({
        setHeaders: newHeaders
      });
    }

    return next.handle(request);
  }
}
