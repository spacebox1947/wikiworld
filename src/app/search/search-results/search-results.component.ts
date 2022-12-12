import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() pages: any[] = [];
  displayedColumns = ['title', 'pageid', 'wordcount', 'snippet'];
  //public searchResults = [];
  wikiUrlForPageid = "https://en.wikipedia.org/?curid=";

  constructor() { }

  ngOnInit(): void {
  }

  printPages() {
    if (this.pages.length > 0) {
      for (let i = 0; i < 10; i++ ) {
        console.log(this.pages[i].title, this.pages[i].pageid, this.pages[i].wordcount);
      }
    }
  }

}
