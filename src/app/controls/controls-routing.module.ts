import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlFormComponent } from './control-form/control-form.component';

const routes: Routes = [
  {
    path: '', component: ControlFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlsRoutingModule { }
