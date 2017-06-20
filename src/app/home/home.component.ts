import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SearchQuery} from '../shared/models/search-query.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchFormParams: SearchQuery;

  constructor(private router: Router) { }

  ngOnInit() {
    this.searchFormParams = new SearchQuery();
  }

  jobSearch(searchQuery: SearchQuery) {
    console.log(JSON.stringify(searchQuery));

    const routerParams = {
      l: searchQuery.location,
      q: searchQuery.jobTitle
    };

    this.router.navigate(['/jobs', searchQuery.location, searchQuery.jobTitle]);
  }

}
