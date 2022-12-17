import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { ControlsService } from '../controls/controls.service';

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
      timestamp: string;
      srlimit: number;
    }[]
  };
}

interface WikipediaPageResponse {
  parse: {
    title: string;
    pageid: number;
    text: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  currentSearch$: any = 'RollerCoaster Tycoon';
  wikiPage: any[] = [];
  srlimit$: number = 2;
  pageSearch$: any = 'RollerCoaster Tycoon';
  //searched: boolean = false;

  constructor(
    private http: HttpClient,
    private controlForm: ControlsService) {
      //this.srlimit$ = this.controlForm.get()
    }

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
        origin: '*',
        srlimit: this.srlimit$
      }
    }).pipe(
      map(x => x.query?.search)     
    ).subscribe((response) => {
      this.wikiPage = response;
      //this.searched = true;
    });
  }

  // ---- https://www.mediawiki.org/wiki/API:Get_the_contents_of_a_page
  // https://en.wikipedia.org/w/api.php?
  // action=parse&format=json&page=Pet_door&prop=text&formatversion=2
  public getPageFromWikipedia() {
    return this.http.get<WikipediaPageResponse>(
      'https://en.wikipedia.org/w/api.php?', 
      {
        params: {
          action: 'parse',
          format: 'json',
          page: this.pageSearch$,
          prop: 'text',
          formatversion: '2',
          origin: '*'
        }
      }
    ).pipe(
      map(x => x.parse)
    );
  }
}