import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchValue: string;
  radioButtonValue: string;

  constructor() { }

  search(data){
     this.searchValue = data.search;
    this.radioButtonValue = data.button;


  }
}
