import { SingleJobResult } from './single-job-result.model';

export class SearchResults {
  version?: number;
  query?: string;
  location?: string;
  paginationPayload?: string;
  radius?: number;
  dupefilter?: boolean;
  highlight?: boolean;
  totalResults?: number;
  start?: number;
  end?: number;
  pageNumber?: number;
  results?: SingleJobResult[];
}
