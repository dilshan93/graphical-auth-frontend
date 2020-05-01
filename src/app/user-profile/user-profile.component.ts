import { Component, OnInit } from '@angular/core';
import {StorTokenService} from "../shard_services/stor-token.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  loggedinUser: any;

  constructor(private storTokenService : StorTokenService) { }

  ngOnInit() {
    this.loggedinUser = this.storTokenService.getUser();
  }

}
