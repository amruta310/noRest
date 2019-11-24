import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // { path: '', component: DashboardViewComponent },
  { path: 'events', component: EventListComponent },
  { path: 'signUpOrLogin/:param', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
