import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/search/navigation.service';
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
    public wikipedia: WikipediaService,
    private navigation: NavigationService) { }

  ngOnInit(): void {
    this.searchControls.controlsForm.controls['numberOfResults'].valueChanges.subscribe((value) => {
      this.wikipedia.srlimit$ = value;
    })
  }

  submitAndReroute() {
    console.log("rerouting to result list");
    this.navigation.goToResultsList();
  }
}