import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {
  controlsForm = new FormGroup({
    numberOfResults: new FormControl(10, [
      Validators.min(1),
      Validators.max(10)
    ]),
    pageid: new FormControl(true),
    wordcount: new FormControl(false),
    size: new FormControl(false),
    timestamp: new FormControl(false),
    snippet: new FormControl({value: true, disabled: true}),
    title: new FormControl({value: true, disabled: true})
  });

  constructor() { }
}
