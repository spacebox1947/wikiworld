import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlsRoutingModule } from './controls-routing.module';
import { ControlFormComponent } from './control-form/control-form.component';


@NgModule({
  declarations: [
    ControlFormComponent
  ],
  imports: [
    CommonModule,
    ControlsRoutingModule
  ]
})
export class ControlsModule { }
