import { Animal } from './../models/animal.model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';
import { AnimalSchema } from './../../../../Backend/api/models/animalSchema';

declare global {
  interface Window { imageUrl: any; sanitizer: any; }
}
window.imageUrl = window.imageUrl || {};
window.sanitizer = window.sanitizer || {};

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  animals: AnimalSchema[];
  animalCommentMap = new Map();
  imageUrl: Binary;
  imageDisplay: SafeResourceUrl;
  animalEachDisplay: boolean = false;
  animalEach: Animal;

  constructor(private _http : HttpService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._http.gettodos().subscribe(data => {
      this.animals = data;
      // for (let anm of Object.keys(this.animals)) {
      //     this.animalCommentMap.set(this.animals[anm], null);
      // }
    });
  }
  openDetails(i) {
    this.animalEachDisplay = true;
    this.animalEach = i;
  }
  callMain(){
    this.animalEachDisplay = false;
  }
}
