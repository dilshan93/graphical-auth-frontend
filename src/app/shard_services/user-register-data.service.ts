import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterDataService {

  protected registeredData = new BehaviorSubject<any>(null);

  constructor() { }

  getRegisteredData(): Observable<any>{
    return this.registeredData.asObservable();
  }

  setRegisteredData(data: any) {
    this.registeredData.next(data);
  }

  getLoginData(): Observable<any>{
    return this.registeredData.asObservable();
  }

  setLoginData(data: any) {
    this.registeredData.next(data);
  }
}
