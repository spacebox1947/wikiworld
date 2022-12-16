import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchHomeComponent } from './search-home/search-home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// needed for buttons and icons
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// needed for a fancy table
import { MatTableModule } from '@angular/material/table'

// needed these two for a SINGLE input form element
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DisplayWikiComponent } from './display-wiki/display-wiki.component'

@NgModule({
  declarations: [
    SearchBarComponent,
    SearchResultsComponent,
    SearchHomeComponent,
    DisplayWikiComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SearchModule { }
