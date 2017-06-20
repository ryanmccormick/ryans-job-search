import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { IIndeedService } from '../../src/app/shared/interfaces/indeed-service.interface';
import { SearchQuery } from '../../src/app/shared/models/search-query.model';
import { SearchResults } from '../../src/app/shared/models/search-results.model';
import { RESPONSEMOCK } from '../mocks/response.mocks';


export class MockIndeedService implements IIndeedService {

  getJobByLocation(search: SearchQuery): Observable<SearchResults> {
    return this.jobByLocationObservable();
  }

  private jobByLocationObservable(): Observable<SearchResults> {
    const source = Observable.create((observer: Observer<any>) => {
      observer.next(RESPONSEMOCK);
      observer.complete();
    });

    return source;
  }

}
