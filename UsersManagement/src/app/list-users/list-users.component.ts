import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListUsersService} from "../services/list-users.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  result: any;
  arrayOfUsers: Array<Object>;

  constructor(private httpClient: HttpClient, private usersService: ListUsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => {
        this.result = data
        this.arrayOfUsers = this.result.results;
        console.log(this.arrayOfUsers);

      })
  }

}
