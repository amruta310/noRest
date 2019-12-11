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
  constructor(public dialogRef: MatDialogRef<AnimalEachComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  public sanitizer: DomSanitizer ) {
      this.animalEach = data.animalEach;
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
