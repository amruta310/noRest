import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';
import { EventSchema } from './../../../../Backend/api/models/eventSchema';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PaymentComponent} from '../payment/payment.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  
  events: EventSchema[] = [];
  eventscontent: String;
  eventTitle: EventSchema[] = [];
  eventImage: Binary;

  panleExpanded: true;

  constructor(private _http : HttpService, public sanitizer: DomSanitizer, public dialog: MatDialog) { }

  ngOnInit() {

    this._http.getEvents().subscribe(data => {
      

      for( let event of Object.keys(data))
      {
        this.events.push(data[event]);
      }
       console.log( this.events[0].text);
  });

}


openPayment(){
  this.dialog.open(PaymentComponent);
}
  }
