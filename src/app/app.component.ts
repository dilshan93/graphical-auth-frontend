import {Component, OnInit} from '@angular/core';
import {StorTokenService} from "./shard_services/stor-token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'image-auth-frontend';

  private roles: string[];
  isLoggedIn = false;
  getAdminDashboard = false;
  userName: string;

  constructor(private storTokenService: StorTokenService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.storTokenService.getToken();

    if (this.isLoggedIn) {
      const user = this.storTokenService.getUser();
      this.roles = user.roles;

      this.getAdminDashboard =this.roles.includes('ROLE_ADMIN');
      this.userName = user.userName;
    }
  }

  logout() {

    this.storTokenService.logOut();
    window.location.reload();
  }


}
