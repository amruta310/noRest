import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
  private lat;
  private lng;
  constructor(private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.lat = parseFloat(this.route.snapshot.queryParamMap.get('lat'));
    this.lng = parseFloat(this.route.snapshot.queryParamMap.get('lng'));

  }

}
