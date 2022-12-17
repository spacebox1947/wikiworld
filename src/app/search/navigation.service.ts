import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  goToDisplay() {
    this.router.navigateByUrl(`${this.router.url}/display`);
  }

}
