import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlsService } from '../controls.service';

@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.css']
})
export class ControlFormComponent implements OnInit {

  @Output() searchControlForm: EventEmitter<FormGroup> = new EventEmitter();

  constructor(public searchControls: ControlsService) { }

  ngOnInit(): void {
  }

  onControlSubmit(event: any) {
    //event.preventDefault();
    //this.searchControlForm.emit(this.searchControls.controlsForm);
    //console.log(this.searchControls.controlsForm.value);
  }
}