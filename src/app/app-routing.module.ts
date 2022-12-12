import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then( (mod) => mod.SearchModule)
  },
  {
    path: 'control',
    loadChildren: () =>
      import('./controls/controls.module').then( (mod) => mod.ControlsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
