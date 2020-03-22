import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  getPreLoginContent(): Observable<any> {
    return this.httpClient.get(environment.GETALL, { responseType: 'text' });
  }

  getUserDashbord(): Observable<any> {
    return this.httpClient.get(environment.GETUSER, { responseType: 'text' });;
  }

  getAdminDashbord(): Observable<any> {
    return this.httpClient.get(environment.GETADMIN, { responseType: 'text' });;
  }
}
