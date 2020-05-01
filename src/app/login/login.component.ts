import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserRegisterDataService} from "../shard_services/user-register-data.service";
import {AuthenticationService} from "../shard_services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  stringImage:any;

  constructor(private formBuilder: FormBuilder, private registerService : UserRegisterDataService, private router: Router, private authenticationService: AuthenticationService) {
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
    // this.authenticationService.getImage(this.loginFormGroup.value.username).subscribe(
    //   data => {
    //     console.log("SUCCESS");
    //     console.log(data);
    //     this.stringImage = data;
    //   },
    //   err => {
    //     console.log("ERROR");
    //   }
    // );
      }

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
