import { Animal } from './../models/animal.model';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from './../http.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';
import { AnimalSchema } from './../../../../Backend/api/models/animalSchema';
import {MatDialog,  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef,  MatDialogConfig } from '@angular/material';
import { AnimalEachComponent } from './animal-each/animal-each.component';
import { AskquestionComponent } from './askquestion/askquestion.component';

import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {trigger, keyframes, animate, transition} from '@angular/animations';
import * as kf from './keyframes';
declare global {
  interface Window { imageUrl: any; sanitizer: any; }
}
window.imageUrl = window.imageUrl || {};
window.sanitizer = window.sanitizer || {};

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
    ])
  ]
})

@Injectable()
export class AnimalComponent implements OnInit {
  animals: AnimalSchema[];
  animalCommentMap = new Map();
  imageUrl: Binary;
  imageDisplay: SafeResourceUrl;
  animalEachDisplay: boolean = false;
  animalEach: Animal;
  imageObject: Array<object> = [];
  animationState: string;
  param: string;
  showAskme: boolean;
  constructor(private _http : HttpService, public sanitizer: DomSanitizer,  public dialog: MatDialog, @Inject(ActivatedRoute) private _activatedroute : ActivatedRoute) { }

  ngOnInit() {
    this.param = this._activatedroute.snapshot.params['id'];
    if(this.param == undefined){
      this.showAskme = false;
    }
    else{
      this.showAskme = true;
    }

    this._http.getAnimals().subscribe(data => {
      this.animals = data;

      for (let img of Object.keys(data)) {
        // this.imageObject.push({image: this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, '+this.animals[img].image),
        // thumbImage: this.animals[img].image,
        // alt: 'alt of image',
        // title: 'title of image'});
      }
      console.log(this.imageObject);
      //
      // console.log( this.imagesUrl);
      // for (let anm of Object.keys(this.animals)) {
      //     this.animalCommentMap.set(this.animals[anm], null);
      // }
    });
  }

  startAnimation(state){
    console.log(state);
    if(!this.animationState){
      this.animationState = state;
    }
  }

  resetAnimationSTate(){
    this.animationState = '';
  }

  openDetails(i) {
    this.animalEachDisplay = true;
    this.animalEach = i;
    const dialogRef = this.dialog.open(AnimalEachComponent, {
      width: '90%',
      data: { animalEach: this.animalEach }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
    // this.dialog.open(AskquestionComponent, {
    //   width: '90%',
    //   data: { animalEach: this.animalEach }
    // });
  }
  openQuestion(){
    this.dialog.open(AskquestionComponent, {
      width: '60%',
    });
  }
  callMain(){
    this.animalEachDisplay = false;
  }
}
