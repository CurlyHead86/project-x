import { Injectable, Inject, Optional } from "@angular/core";
import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler
} from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest, next: HttpHandler) {
    const token = this.authService.getToken();
    req = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(token);
    return next.handle(req);
  }
}
