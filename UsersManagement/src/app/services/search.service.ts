import {Injectable} from '@angular/core';
import {ListUsersService} from "./list-users.service";
import {SafeUsersService} from "./safe-users.service";
import {NgForm} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchValue: string;
  radioButtonValue: string;
  user: any;
  userAge: string;
  city: string;
  street: string;
  arrayOfSearchUsers: Array<Object> = [];
  arrayOfUsers: Array<Object>;
  streetAndCity: string;
  title: string;
  firstName: string;
  lastName: string;
  fullName: string;
  titleAndFullName: string;


  constructor(private userService: ListUsersService,
              private safeUsersService: SafeUsersService) {
  }


  search(data) {

    this.searchValue = data.search;

    if (this.searchValue) {
      this.radioButtonValue = data.button;
      this.arrayOfUsers = this.safeUsersService.listUsers;

      if (this.radioButtonValue === "age") {
        for (this.user of this.arrayOfUsers) {
          this.userAge = this.user.dob.age;
          if (this.userAge == this.searchValue) {
            this.arrayOfSearchUsers.push(this.user);
            this.searchValue = "";

          }

        }

      } else if (this.radioButtonValue === "address") {

        for (this.user of this.arrayOfUsers) {
          this.street = this.user.location.street;
          this.city = this.user.location.city;
          this.streetAndCity = this.street + " " + this.city;
          if (this.street === this.searchValue
            || this.city === this.searchValue
            || this.streetAndCity === this.searchValue) {
            this.arrayOfSearchUsers.push(this.user);
          }

        }
      } else if (this.radioButtonValue === "") {

        for (this.user of this.arrayOfUsers) {

          this.title = this.user.name.title;
          this.firstName = this.user.name.first;
          this.lastName = this.user.name.last;
          this.fullName = this.firstName + " " + this.lastName;
          this.titleAndFullName = this.title + " " + this.firstName + " " + this.lastName;
          if (this.firstName === this.searchValue
            || this.lastName === this.searchValue
            || this.fullName === this.searchValue
            || this.titleAndFullName === this.searchValue) {

            this.arrayOfSearchUsers.push(this.user)
          }

        }

      }
      return this.arrayOfSearchUsers;
    }

  }

}
