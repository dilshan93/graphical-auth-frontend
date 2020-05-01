import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const httpContent = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient : HttpClient) { }

  getLoginUser(obj:any): Observable<any>{
    return this.httpClient.post(environment.LOGUSER, obj, httpContent);
  }
  registerUser(obj:any): Observable<any>{
    return this.httpClient.post(environment.SAVE, obj);
  }
  getImage(user:any): Observable<any>{
    return this.httpClient.get(environment.GETIMAGE+user, {responseType: 'text'});
  }
}
