import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SafeUsersService {
  listUsers: any;
  constructor() { }

  safeUsers(users){
    this.listUsers = users;
    return this.listUsers;

  }
}
