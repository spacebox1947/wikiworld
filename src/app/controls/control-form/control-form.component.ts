import { Component, OnInit } from '@angular/core';
import { WikipediaService } from 'src/app/search/wikipedia.service';
import { ControlsService } from '../controls.service';


@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.css']
})
export class ControlFormComponent implements OnInit {

  constructor(
    public searchControls: ControlsService,
    public wikipedia: WikipediaService) { }

  ngOnInit(): void {
    this.searchControls.controlsForm.controls['numberOfResults'].valueChanges.subscribe((value) => {
      this.wikipedia.srlimit$ = value;
    })
  }
}