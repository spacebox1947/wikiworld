import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlsRoutingModule } from './controls-routing.module';
import { ControlFormComponent } from './control-form/control-form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'
// needed these two for a SINGLE input form element
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ControlFormComponent
  ],
  imports: [
    CommonModule,
    ControlsRoutingModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ControlsModule { }
