import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";
import {UserRegisterDataService} from "../shard_services/user-register-data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userRegisterFormGroup: FormGroup
  constructor(private formBuilder: FormBuilder, private registerService : UserRegisterDataService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userRegisterFormGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(null),
      lastName: this.formBuilder.control(null),
      userName: this.formBuilder.control(null),
      email: this.formBuilder.control(null)

    })
  }

  saveUser() {
    const obj ={
      firstName: this.userRegisterFormGroup.value.firstName,
      lastName: this.userRegisterFormGroup.value.lastName,
      userName: this.userRegisterFormGroup.value.userName,
      email: this.userRegisterFormGroup.value.email
    }

    this.registerService.setRegisteredData(obj);
    this.router.navigate(['/home']);

    // this.registerService.saveUser(obj).subscribe(()=>{
    //   alert("Success");
    //   this.router.navigate(['/login']);
    // },
    //   (error: Error)=>{
    //   alert(error);
    //   });
  }
}
