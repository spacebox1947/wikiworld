import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

  //pages: any[] = [];
  searched: boolean = false;

  constructor(public wikipedia: WikipediaService) { }

  ngOnInit(): void {
    
  }

  getSearchResults() {
    this.wikipedia.getSearchResultsFromWikipedia();
    this.searched = true;
  }
  

}
