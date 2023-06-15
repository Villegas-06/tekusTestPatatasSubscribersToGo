import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean = false;

  constructor(private router: Router) {}

  onLogin() {

    // Init the process to Login and verify if it´s success


    // If the process success, loggedIn becames true

    this.loggedIn = true;
    console.log(this.loggedIn)
  }

}
