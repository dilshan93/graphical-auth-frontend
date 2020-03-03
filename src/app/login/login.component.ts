import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
  }

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

  getAllData() {

    this.loginService.getAllDetails().subscribe((response) => {
        if (response) {
          console.log(response);
        }

      },
      (error: Error) => {
        alert(error);
      });
  }

  loginUser() {
    const obj = {
      userName: this.loginFormGroup.value.username,
      passWord: this.loginFormGroup.value.password
    }

    this.loginService.getUser(obj).subscribe((response) =>{

        if (response && response != null) {
          this.router.navigate(['/home']);
        }
    },
      (error:Error) =>{
      alert(error);
      }

);
  }

}
