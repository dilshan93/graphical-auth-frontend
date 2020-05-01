import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../shard_services/user-data.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  context:any;

  constructor(private userDataService : UserDataService) { }

  ngOnInit() {

    this.userDataService.getUserDashbord().subscribe(
      data => {
        this.context = data;
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

}
