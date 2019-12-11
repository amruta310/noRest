import { Animal } from './../../models/animal.model';
import { Component, OnInit, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
export interface DialogData {
  animalEach: Animal;
}

@Component({
  selector: 'app-animal-each',
  templateUrl: './animal-each.component.html',
  styleUrls: ['./animal-each.component.scss']
})
export class AnimalEachComponent implements OnInit {
  @Input() animalEach: Animal;
  @Output() divClicked = new EventEmitter<any>();
  breed: string;
  gender: string;
  age: string;
  health: string;
  description: string;
  name: string;
  image: string;
  constructor(public dialogRef: MatDialogRef<AnimalEachComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  public sanitizer: DomSanitizer ) {
      this.animalEach = data.animalEach;
      this.breed = data.animalEach.breed;
      this.gender = data.animalEach.gender;
      this.health = data.animalEach.health;
      this.description = data.animalEach.description;
      this.name = data.animalEach.name;
      this.image = data.animalEach.image;
  }

  ngOnInit() {
  }

  onClick(event) {
    this.divClicked.emit(true);
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
