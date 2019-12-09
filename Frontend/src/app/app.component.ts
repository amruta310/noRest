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
    this.openDashboardPage = event;
    this.loggedInUser = event;
    console.log("After logging in " + this.openDashboardPage);
  }

  removeHome(){
    console.log('Remove');
    this.onlyPayment = true;
  }
}
