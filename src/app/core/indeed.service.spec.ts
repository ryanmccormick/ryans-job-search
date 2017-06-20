import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { IndeedService } from './indeed.service';
import { SearchQuery } from '../shared/models/search-query.model';
import { RESPONSEMOCK } from '../../../spec/mocks/response.mocks';

import '../rxjs-operators';

describe('IndeedService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        IndeedService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  }));

  it('should be created', inject([IndeedService], (service: IndeedService) => {
    expect(service).toBeTruthy();
  }));

  describe('getJobByLocation', () => {
    it('should be defined', inject([IndeedService], (service: IndeedService) => {
      expect(service.getJobByLocation).toBeDefined();
    }));

    it('should return an observable of job search data', inject([IndeedService, XHRBackend], (indeedService, mockBackend) => {
      const mockResponse = RESPONSEMOCK;
      const searchQuery: SearchQuery = {
        jobTitle: 'Engineer',
        location: '55317'
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      indeedService.getJobByLocation(searchQuery).subscribe((data) => {
        expect(data).toEqual(mockResponse);
      });

    }));

  });
});
