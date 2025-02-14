import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  protected registeredData = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  getRegisteredData(): Observable<any>{
    return this.registeredData.asObservable();
  }

  setRegisteredData(data: any) {
    this.registeredData.next(data);
  }

  saveUser(obj:any): Observable<any>{
    return this.http.post(environment.SAVE, obj);
  }
}
