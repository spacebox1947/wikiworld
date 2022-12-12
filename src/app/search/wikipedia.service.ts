import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

export interface SearchTerm {
  search: string;
}

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      pageid: number;
      wordcount: number;
      size: number;
      snippet: string;
    }[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  currentSearch$: any = 'RollerCoaster Tycoon';

  constructor(private http: HttpClient) { }

  public getSearchResultsFromWikipedia() {
    return this.http.get<WikipediaResponse>(
      'https://en.wikipedia.org/w/api.php?', 
      {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: this.currentSearch$,
        origin: '*'
      }
    }).pipe(
      map(x => x.query?.search)     
    );
  }

}