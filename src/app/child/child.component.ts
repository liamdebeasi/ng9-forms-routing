import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor(private router: Router) { }

  public logout() {
    this.router.navigate(['home']);
  }

}
