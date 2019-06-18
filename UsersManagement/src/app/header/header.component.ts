import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ListUsersService} from "../services/list-users.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  result: Object;

  constructor(private httpClient: HttpClient, private usersService: ListUsersService) { }

  ngOnInit() {

    this.usersService.getUsers()
      .subscribe(data => {
        this.result = data;
        console.log(this.result);
      })



  }

  searchForm(value, myRadio){


    console.log(value, myRadio);
}

}
