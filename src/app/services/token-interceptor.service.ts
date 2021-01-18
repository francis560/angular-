import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept (req: any, next: any) {

    const tokenizeReq = req.clone({
      setHeaders: {
        token: localStorage.getItem('token')
      }
    });

    return next.handle(tokenizeReq);
  }

  constructor() { }
}
