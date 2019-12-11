import { AboutusComponent } from './aboutus/aboutus.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { MbscModule } from '@mobiscroll/angular';
import { AnimalEachComponent } from './animal/animal-each/animal-each.component';
import { AnimalComponent } from './animal/animal.component';
import { MaterialModule } from './material.module';
import { MatButtonModule, MatIconModule, MatFormFieldModule,MatExpansionModule } from '@angular/material';
import { BrowserModule, DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { EventListComponent } from './event-list/event-list.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DonationComponent } from './donation/donation.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { LoginComponent } from './login/login.component';
import { ValidationService } from './validation.service';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material';
import { OurMissionComponent } from './FirstPage Components/our-mission/our-mission.component';
import { InActionComponent } from './FirstPage Components/in-action/in-action.component';
import { DonationImpactComponent } from './FirstPage Components/donation-impact/donation-impact.component';
import { VideoBgComponent } from './FirstPage Components/video-bg/video-bg.component';
import { PaymentComponent } from './payment/payment.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { AboutUsComponent } from './about-us/about-us.component';

import { AskquestionComponent } from './animal/askquestion/askquestion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    EventListComponent,
    LogoComponent,
    HeaderComponent,
    SignUpComponent,
    DonationComponent,
    SideNavComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    LoginComponent,
    AnimalComponent,
    AnimalEachComponent,
    OurMissionComponent,
    InActionComponent,
    DonationImpactComponent,
    VideoBgComponent,
    EventCalendarComponent,
    PaymentComponent,
    AskquestionComponent,
    AboutusComponent,
    GoogleMapsComponent,
    AboutUsComponent
  ],
  imports: [
    MbscModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MbscModule,
    AgmCoreModule.forRoot({

     apiKey : 'AIzaSyDGwNx3tcfdRexa1qJJOa15uaFBhK-nDFQ',


    }),

    MatGridListModule,
    MatExpansionModule,
    NgCircleProgressModule.forRoot({}),
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDGwNx3tcfdRexa1qJJOa15uaFBhK-nDFQ',
     }),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
