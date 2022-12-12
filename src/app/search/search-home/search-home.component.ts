import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

  pages: any[] = [];

  constructor(private wikipedia: WikipediaService) { }

  ngOnInit(): void {
  }

  getSearchResults() {
    this.wikipedia.getSearchResultsFromWikipedia().subscribe( (response) => {
      //console.log(response);
      this.pages = response;
      //console.log(this.pages);
    });
    //this.printPages();
  }

  

}
