import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListUsersService} from "../services/list-users.service";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  result: any;
  arrayOfUsers: Array<Object>;
  arrayOfSearchUsers: Array<Object> = [];
  searchValue: string;
  radioButtonValue: string;
  user: Object;
  userAge: string;

  constructor(private httpClient: HttpClient, private usersService: ListUsersService, private searchService: SearchService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => {
        this.result = data
        this.arrayOfUsers = this.result.results;
        console.log(this.arrayOfUsers);

      })
  }
  ngDoCheck(){
    this.searchValue = this.searchService.searchValue;

    if(this.searchValue){
      this.radioButtonValue = this.searchService.radioButtonValue;
      //console.log(this.searchValue);
      //console.log(this.radioButtonValue);

      if(this.radioButtonValue ==="age"){
        for(this.user of this.arrayOfUsers){
          // @ts-ignore
          this.userAge = this.user.dob.age
          if(this.userAge == this.searchValue){
            this.arrayOfSearchUsers.push(this.user)


          }

        }

      }


      //console.log(this.searchValue);

    }
    console.log(this.arrayOfSearchUsers)

  }


  deleteUser(){
    console.log("Delete");
  }

}
