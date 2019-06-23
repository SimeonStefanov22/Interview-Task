import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {
  listUsers: any;
  countGetUsers: string;
  constructor(private httpClient: HttpClient) { }

  getUsers(){
    this.countGetUsers = "20";
    const url =`https://randomuser.me/api/?results=${this.countGetUsers}`;
    this.listUsers = this.httpClient.get(url);
    return this.listUsers;
  }
}
