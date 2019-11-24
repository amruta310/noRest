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

  animals: Array<object>;
  comments: Array<object>;
  animalIds: string[];
  imageUrl: Binary;
  imageDisplay: SafeResourceUrl;
  count: number;
  animalCommentMap = new Map();

  constructor(private _http : HttpService, public sanitizer: DomSanitizer) {
    this.count = 0;
  }

  ngOnInit() {
    this._http.getAnimals().subscribe(data => {
      this.animals = data;
      this._http.getComments().subscribe(data => {
        this.comments = data;

        // tslint:disable-next-line: prefer-for-of
        for (let anm of Object.keys(this.animals)) {
          this.animalCommentMap.set(this.animals[anm], null);
          for (let comm of Object.keys(this.comments)) {
            if (this.animals[anm]._id == this.comments[comm].animalId) {
              if(this.comments[comm].comment != null){
                this.animalCommentMap.set(this.animals[anm], this.comments[comm]);
              }
            }
          }
        }
        console.log(this.animalCommentMap);
      });
    });
  }

  updateComment() {

  }
}
