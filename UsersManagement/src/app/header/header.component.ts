import {Component, OnInit} from '@angular/core';
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchData: string = "";
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {}

  searchForm(data) {
    this.searchData = data;
    this.searchService.search(this.searchData);
    console.log(data);
    //this.searchData = "";
    //console.log(this.searchData)
  }


}
