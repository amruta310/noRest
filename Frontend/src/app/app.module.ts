import { BrowserModule, DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
