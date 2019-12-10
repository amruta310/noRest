import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pawfect';
  openDashboardPage: boolean;
  loggedInUser: object;
  onlyPayment: boolean;

  constructor() {}

  getDashboard(event) {
    console.log('here');
    this.openDashboardPage = true;
    this.loggedInUser = event;
  }

  openHome(event) {
    this.openDashboardPage = false;
  }

  removeHome(){
    this.onlyPayment = true;
  }
}
