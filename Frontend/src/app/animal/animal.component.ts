import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal.model';
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
  //animals:Animal[]=[new Animal('Bella','Hound /Australian Shepherd','https://media.defense.gov/2013/Dec/20/2000761758/750/422/0/131214-M-NP085-002.JPG')]
  constructor(private _http : HttpService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._http.gettodos().subscribe(data => {
      this.animals = data;
      // for (let anm of Object.keys(this.animals)) {
      //     this.animalCommentMap.set(this.animals[anm], null);
      // }
    });
  }

}
