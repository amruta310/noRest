import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { LoginComponent } from './login/login.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DonationComponent } from './donation/donation.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalEachComponent } from './animal/animal-each/animal-each.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PaymentComponent } from './payment/payment.component';
import { AskquestionComponent } from './animal/askquestion/askquestion.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
 // { path: '', component: DashboardViewComponent },
  { path: '', component: HomeComponent },
  { path: 'events', component: EventCalendarComponent },
  { path: 'donation', component: DonationComponent},
  { path: 'animal', component: AnimalComponent },
  { path: 'animal/:id', component: AnimalComponent },
  { path: 'signUp/:param', component: SignUpComponent },
  { path: 'Login/:param', component: LoginComponent },
  { path: 'animaleach', component: AnimalEachComponent },
  { path: 'askquestion', component: AskquestionComponent },
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'payment/:donationAmount', component: PaymentComponent},
  { path: 'maps', component: GoogleMapsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
