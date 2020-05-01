import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {LoginPasswordComponent} from "./login-password/login-password.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {RegisterPasswordComponent} from "./register-password/register-password.component";


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'registerpassword',
    component: RegisterPasswordComponent
  },
  {
    path: 'loginpassword',
    component: LoginPasswordComponent
  },
  {
    path: 'userProfile',
    component: UserProfileComponent
  },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'userDashboard',
    component: UserDashboardComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
