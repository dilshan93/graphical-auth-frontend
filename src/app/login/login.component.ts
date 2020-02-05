import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  names:any;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){

    this.loginService.getAllDetails().subscribe( (response) =>{
      if(response){
        this.names = response;
      }

    },
      (error : Error) => {
        alert(error);
      });
  }

}
