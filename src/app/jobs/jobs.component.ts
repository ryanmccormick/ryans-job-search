import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchQuery } from '../shared/models/search-query.model';

import { IndeedService } from '../core/indeed.service';
import { SearchResults } from '../shared/models/search-results.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  searchQuery: SearchQuery;
  searchResults: SearchResults;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private indeedService: IndeedService) { }

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

  setSearchData(searchQuery: SearchQuery): void {
    this.indeedService.getJobByLocation(searchQuery)
      .subscribe(
        results => this.searchResults = results,
        error => console.log('something went wrong'),
        () => console.log(JSON.stringify(this.searchResults))
      );
  }



}
