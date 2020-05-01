import { Component, OnInit } from '@angular/core';
import {UserDataService} from "../shard_services/user-data.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  context:any;
  constructor(private userDataService : UserDataService) { }

  ngOnInit() {

    this.userDataService.getAdminDashbord().subscribe(
      data => {
        this.context = data;
      },
      err => {
        this.context = JSON.parse(err.error).message;
      }
    );
  }

}
