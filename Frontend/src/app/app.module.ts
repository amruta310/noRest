import { MaterialModule } from './material.module';
import { MatButtonModule, MatIconModule } from '@angular/material';
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
import { FormsModule } from '@angular/forms';
import { DonationComponent } from './donation/donation.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalEachComponent } from './animal/animal-each/animal-each.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
<<<<<<< HEAD
import { OurMissionComponent } from './FirstPage Components/our-mission/our-mission.component';
import { InActionComponent } from './FirstPage Components/in-action/in-action.component';
import { DonationImpactComponent } from './FirstPage Components/donation-impact/donation-impact.component';
=======
>>>>>>> 2a3bc40b92543fc919bfaa5a6c1b15b3bd7f7a70

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
    AboutUsComponent,
    ContactUsComponent,
    AnimalComponent,
    AnimalEachComponent,
    HomecontentComponent,
<<<<<<< HEAD
    OurMissionComponent,
    InActionComponent,
    DonationImpactComponent,
=======
>>>>>>> 2a3bc40b92543fc919bfaa5a6c1b15b3bd7f7a70
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
