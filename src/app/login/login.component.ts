import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserRegisterDataService} from "../shard_services/user-register-data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private registerService : UserRegisterDataService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.loginFormGroup = this.formBuilder.group({
      username: this.formBuilder.control(null)

    })
  }


  loginUser() {
    const obj = {
      userName: this.loginFormGroup.value.username
    }
    this.registerService.setLoginData(obj);
    this.router.navigate(['/loginpassword']);

//     this.loginService.getUser(obj).subscribe((response) =>{
//
//         if (response && response != null) {
//           this.router.navigate(['/home']);
//         }
//     },
//       (error:Error) =>{
//       alert(error);
//       }
//
// );
  }

}
