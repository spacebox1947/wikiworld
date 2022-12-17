import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ControlsService } from 'src/app/controls/controls.service';
import { WikipediaService } from '../wikipedia.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  allDisplayColumnsProperties = ['title', 'pageid', 'wordcount', 'snippet', 'size','timestamp'];
  displayedColumns = ['title', 'snippet', 'pageid'];
  //public searchResults = [];
  wikiUrlForPageid = "https://en.wikipedia.org/?curid=";
  showResults = true;

  @Output() displayPage = new EventEmitter<string>;

  constructor(
    public searchControls: ControlsService,
    public wikipedia: WikipediaService,
    private navigation: NavigationService) { }

  ngOnChanges(): void {
    //console.log(this.searchControls.controlsForm.value);
    this.updateDisplayedColumns();
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
    //console.log(newColumns);
    this.displayedColumns = newColumns;
  }

  toggleShowResults() {
    this.showResults = !this.showResults;
  }

  displayPageTitle(title: any) {
    console.log(title);
    // how to route to display wiki page?
    this.wikipedia.pageSearch$ = title;
    this.navigation.goToDisplay();
  }
}
