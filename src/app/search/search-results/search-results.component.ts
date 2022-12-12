import { Component, OnInit, Input} from '@angular/core';
import { ControlsService } from 'src/app/controls/controls.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() pages: any[] = [];
  allDisplayColumnsProperties = ['title', 'pageid', 'wordcount', 'snippet', 'size','timestamp'];
  displayedColumns = ['title', 'snippet', 'pageid'];
  //public searchResults = [];
  wikiUrlForPageid = "https://en.wikipedia.org/?curid=";

  constructor(public searchControls: ControlsService) { }

  ngOnInit(): void {
    //console.log(this.searchControls.controlsForm.value);
    this.updateDisplayedColumns();
  }

  printPages() {
    if (this.pages.length > 0) {
      for (let i = 0; i < 10; i++ ) {
        console.log(this.pages[i].title, this.pages[i].pageid, this.pages[i].wordcount);
      }
    }
  }

  updateDisplayedColumns() {
    const newColumns: string[] = [];
    for (let i = 0; i < this.allDisplayColumnsProperties.length; i++) {
      if (this.searchControls.controlsForm.get(this.allDisplayColumnsProperties[i])?.value) {
        /* console.log(this.allDisplayColumnsProperties[i],
          this.searchControls.controlsForm.get(this.allDisplayColumnsProperties[i])?.value); */
        newColumns.push(this.allDisplayColumnsProperties[i]);
      }
    }
    console.log(newColumns);
    this.displayedColumns = newColumns;
  }
}
