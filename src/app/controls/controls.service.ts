import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/*
* ControlForm for a query to wikipedia to pull multiple page results
*/


@Injectable({
  providedIn: 'root'
})
export class ControlsService {
  controlsForm = new FormGroup({
    numberOfResults: new FormControl(10, {
      nonNullable: true,
      validators: [
        Validators.min(1),
        Validators.max(50)
      ]
    }),
    pageid: new FormControl(true),
    wordcount: new FormControl(false),
    size: new FormControl(false),
    timestamp: new FormControl(false),
    snippet: new FormControl({value: true, disabled: true}),
    title: new FormControl({value: true, disabled: true})
    // technically, neither snippet or title will be sent with the form when emitted
  });

  constructor() { }
}