import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.getAllData();
    this.initForm();
  }

  private initForm() {
    this.loginFormGroup = this.formBuilder.group({
      username: this.formBuilder.control(null),
      password: this.formBuilder.control(null)

    })
  }

  getAllData(){

    this.loginService.getAllDetails().subscribe( (response) =>{
      if(response){
        console.log(response);
      }

    },
      (error : Error) => {
        alert(error);
      });
  }

  loginUser() {

  }
}
