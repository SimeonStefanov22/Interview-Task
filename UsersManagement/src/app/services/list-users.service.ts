import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private httpClient: HttpClient) { }

 getUsers(){
   const url = "https://randomuser.me/api/?results=20";
   return this.httpClient.get(url);

 }
}
