import { Injectable } from '@angular/core';

const AUTH_TOKEN_KEY = 'auth-token-key';
const AUTH_USER_KEY = 'auth-user-key';

@Injectable({
  providedIn: 'root'
})
export class StorTokenService {

  constructor() { }

  public setToken(token: string){
    window.sessionStorage.removeItem(AUTH_TOKEN_KEY);
    window.sessionStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  public getToken(): string{
    return window.sessionStorage.getItem(AUTH_TOKEN_KEY);
  }

  public setUser(userObj){
    window.sessionStorage.removeItem(AUTH_USER_KEY);
    window.sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(userObj));
  }

  public getUser(){
    return JSON.parse(sessionStorage.getItem(AUTH_USER_KEY));
  }

  logOut(){
    window.sessionStorage.clear();
  }
}
