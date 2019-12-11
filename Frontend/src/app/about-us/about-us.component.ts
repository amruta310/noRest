import { Component, OnInit, Host, HostBinding } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  host: {'(window:scroll)': 'track($event)'}
})

export class AboutUsComponent implements OnInit {
  showScrollButton: boolean= false;
  beginY: any;

  constructor() { }
  ngOnInit() {

    this.beginY = document.documentElement.scrollTop || document.body.scrollTop;
  }

  track($event: any) {
    console.debug('Scroll Event', $event);
    if (this.beginY === undefined || this.beginY != null) {
        if (this.beginY > $event.scrollY) {
            this.showScrollButton = false;
        }
        else {
            this.showScrollButton = true;
        }
    }
    else {
        this.beginY = $event.scrollY;
        this.showScrollButton = true;
    }
  }



}
