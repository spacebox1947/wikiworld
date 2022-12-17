import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BulkSearchService } from '../bulk-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
/*   searchForm = new FormGroup({
    search: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  }); */

  @Output() submittedSearch = new EventEmitter<string>();

  pages: any[] = [];

  constructor(
    public wikipedia: WikipediaService,
    public bulkSearch: BulkSearchService) { }

  ngOnInit(): void {
    this.bulkSearch.searchForm.controls['search'].valueChanges.subscribe((value) => {
      this.wikipedia.currentSearch$ = value;
    })
  }

  get search() {
    return this.bulkSearch.searchForm.value.search;
  }

  onSearchSubmit(event: any) {
    event.preventDefault();
    this.submittedSearch.emit(this.wikipedia.currentSearch$);
  }
}