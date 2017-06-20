import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchQuery } from '../shared/models/search-query.model';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  searchQuery: SearchQuery;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.urlParamSubscription();
  }

  urlParamSubscription() {
    this.route.params
      .map(params => this.setLocalParams(params))
      .subscribe(query => this.setSearchData(this.searchQuery));
  }

  setLocalParams(params) {
    this.searchQuery = new SearchQuery();
    this.searchQuery.location = params['l'];
    this.searchQuery.jobTitle = params['q'];
  }

  setSearchData(searchQuery: SearchQuery) {
    console.log(JSON.stringify(searchQuery));
    // Call Data Service From Here
  }



}
