import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { SearchResults } from '../shared/models/search-results.model';
import { SearchQuery } from '../shared/models/search-query.model';
import {IIndeedService} from '../shared/interfaces/indeed-service.interface';

@Injectable()
export class IndeedService implements IIndeedService {

  private requestUrl: string = '/ads/apisearch';

  constructor(private http: Http) { }

  getJobByLocation(search: SearchQuery): Observable<SearchResults> {
    let reqParams = new URLSearchParams();

    // Test Search params
    reqParams.append('q', search.jobTitle);
    reqParams.append('l', search.location);

    return this.http.get(this.requestUrl, { params: reqParams })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
