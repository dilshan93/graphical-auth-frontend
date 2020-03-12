import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getAllDetails(): Observable<any>{
    return this.http.get(environment.GETALL);
  }

  getUser(obj:any): Observable<any>{
    return this.http.post(environment.GETUSER, obj);
  }
}
