import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayWikiComponent } from './display-wiki/display-wiki.component';
import { SearchHomeComponent } from './search-home/search-home.component';

const routes: Routes = [
  {
    path: 'display', component: DisplayWikiComponent
  },
  {
    path: '', component: SearchHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }