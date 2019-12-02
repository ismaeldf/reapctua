import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
export class TokenInterceptorProvider implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      setHeaders: {
        'Authorization': (localStorage.getItem('token')) ? 'Bearer ' + localStorage.getItem('token') : '',
        'Content-Type': 'application/json'
      }
    });
    return next.handle(dupReq)
  }
}
