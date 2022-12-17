import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

  pages: any[] = [];
  searched: boolean = false;

  constructor(private wikipedia: WikipediaService) { }

  ngOnInit(): void {
  }

  /* getSearchResults() {
    this.wikipedia.getSearchResultsFromWikipedia().subscribe( (response) => {
      //console.log(response);
      this.pages = response;
      this.searched = true;
      //console.log(this.pages);
    });
    //this.printPages();
  } */
  getSearchResults() {
    this.wikipedia.getSearchResultsFromWikipedia();
    this.searched = true;
  }

  getPageResults(event: any) {
    console.log('Got this far', event);
    //this.wikipedia.getPageFromWikipedia('');
  }
  

}
