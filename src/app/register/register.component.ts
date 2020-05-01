import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";
import {UserRegisterDataService} from "../shard_services/user-register-data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userRegisterFormGroup: FormGroup;
  fileData: File = null;
  constructor(private formBuilder: FormBuilder, private registerService : UserRegisterDataService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userRegisterFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passImag: [null, Validators.required]

    })
  }

  saveUser() {
    if (this.userRegisterFormGroup.invalid) {
      alert("Please fill the required fileds")
      return;
    }
    const obj ={
      firstName: this.userRegisterFormGroup.value.firstName,
      lastName: this.userRegisterFormGroup.value.lastName,
      userName: this.userRegisterFormGroup.value.userName,
      email: this.userRegisterFormGroup.value.email,
      passImag: this.fileData
    }
    this.registerService.setRegisteredData(obj);
    this.router.navigate(['/registerpassword']);

    // this.registerService.saveUser(obj).subscribe(()=>{
    //   alert("Success");
    //   this.router.navigate(['/login']);
    // },
    //   (error: Error)=>{
    //   alert(error);
    //   });
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }
}
