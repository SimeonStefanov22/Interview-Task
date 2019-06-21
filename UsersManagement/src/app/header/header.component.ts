import {Component, OnInit} from '@angular/core';
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {

  }
  searchForm(data){

    this.searchService.search(data);

  }

}
