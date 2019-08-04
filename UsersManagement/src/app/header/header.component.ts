import {Component, OnInit} from '@angular/core';
import {SearchService} from "../services/search.service";
import {ListUsersService} from "../services/list-users.service";
import {SafeUsersService} from "../services/safe-users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  result: any;
  arrayOfUsers: Array<any>;
  searchData: string = "";
  constructor(private searchService: SearchService,
              private usersService: ListUsersService,
              private safeUsersService: SafeUsersService) {
  }

  ngOnInit() {}

  searchForm(data) {
    if(data !== {}){
      this.searchData = data;
      this.searchService.search(this.searchData);
      console.log(data);
      console.log(typeof data);
      //this.searchData = "";
      //console.log(this.searchData)
    }

  }

  loadUsersList(isTrue){
    this.usersService.getUsers()

  }


}
