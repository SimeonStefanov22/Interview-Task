import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {
  listUsers: any;
  loadedUsers: any;
  constructor(private httpClient: HttpClient) { }

 getUsers(){
   const url = "https://randomuser.me/api/?results=20";
   this.listUsers = this.httpClient.get(url);
   return this.listUsers;


  }
 userRepo(){
    this.loadedUsers = this.listUsers;
    return this.loadedUsers;

 }
}
