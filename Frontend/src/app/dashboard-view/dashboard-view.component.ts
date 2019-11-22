import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';

declare global {
  interface Window { imageUrl: any; sanitizer: any; }
}
window.imageUrl = window.imageUrl || {};
window.sanitizer = window.sanitizer || {};

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent {

  animals: object;
  comments: object;
  animalIds: string[];
  imageUrl: Binary;
  imageDisplay: SafeResourceUrl;
  count: number;

  constructor(private _http : HttpService, private sanitizer: DomSanitizer) {
    this.count = 0;
  }

  ngOnInit() {
    let animalCommentMap = new Map();
    this._http.getAnimals().subscribe(data => {
      console.log(data.length);
      this.animals = data;
    });

    this._http.getComments().subscribe(data => {
      this.comments = data;
      console.log(this.comments);

    //   this.comments.[Symbol.iterator] = function* () {
    //     let properties = Object.keys(this);
    //     for (let comm of properties) {
    //     }
    // }

    //   for(let comm of this.comments){

    //   }
    //   for (const key in Object.keys(this.animals)) {
    //     if (key != null) {
    //       for (const key1 in Object.keys(this.comments)) {

    //       }
    //     }
    //   }

    });
  }
}
