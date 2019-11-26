import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';
  openDashboardPage: boolean;
  loggedInUser: object;

  constructor() {}

  getDashboard(event) {
    this.openDashboardPage = true;
    this.loggedInUser = event;
  }
}
