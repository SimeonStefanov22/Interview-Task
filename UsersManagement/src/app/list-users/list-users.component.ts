import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListUsersService} from "../services/list-users.service";
import {SearchService} from "../services/search.service";
import {SafeUsersService} from "../services/safe-users.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  result: any;
  arrayOfUsers: Array<Object>;
  searchUsers: Array<Object>;



  constructor(private httpClient: HttpClient,
              private usersService: ListUsersService,
              private safeUsersService: SafeUsersService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => {
        this.result = data
        this.arrayOfUsers = this.result.results;
        console.log(this.arrayOfUsers);
        this.safeUsersService.safeUsers(this.arrayOfUsers);

      })
  }
  ngDoCheck(){
    this.searchUsers = this.searchService.arrayOfSearchUsers;
    if(this.searchUsers.length > 0){
      this.arrayOfUsers = this.searchService.arrayOfSearchUsers;

    }

  }

  deleteUser(){
    console.log("Delete");
  }

}
