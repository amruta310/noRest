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

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    EventListComponent,
    LogoComponent,
    HeaderComponent,
    SignUpComponent,
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
