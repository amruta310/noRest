import { Animal } from './../models/animal.model';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from './../http.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';
import { AnimalSchema } from './../../../../Backend/api/models/animalSchema';
import {MatDialog,  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef,  MatDialogConfig } from '@angular/material';
import { AnimalEachComponent } from './animal-each/animal-each.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

@Injectable()
export class AnimalComponent implements OnInit {
  animals: AnimalSchema[];
  animalCommentMap = new Map();
  imageUrl: Binary;
  imageDisplay: SafeResourceUrl;
  animalEachDisplay: boolean = false;
  animalEach: Animal;

  constructor(private _http : HttpService, public sanitizer: DomSanitizer,  public dialog: MatDialog) { }

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
    const dialogRef = this.dialog.open(AnimalEachComponent, {
      width: '90%',
      data: { animalEach: this.animalEach }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  callMain(){
    this.animalEachDisplay = false;
  }
}
