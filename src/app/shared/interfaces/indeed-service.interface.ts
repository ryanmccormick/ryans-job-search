import {Observable} from 'rxjs/Observable';

import {SearchQuery} from '../models/search-query.model';
import {SearchResults} from '../models/search-results.model';

export interface IIndeedService {
  getJobByLocation(search: SearchQuery): Observable<SearchResults>;
}
