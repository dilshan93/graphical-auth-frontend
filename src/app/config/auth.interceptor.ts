import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorTokenService} from "../shard_services/stor-token.service";

const HEADER_TOKEN_KEY = 'Auth';
const PRE_FIX = 'Access';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authToken : StorTokenService){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const userToken = this.authToken.getToken();
    let authRequest = req;
    if (userToken != null){
      authRequest = req.clone({ headers : req.headers.set(HEADER_TOKEN_KEY, PRE_FIX + userToken)});
    }
    return next.handle(authRequest);
  }

}

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
