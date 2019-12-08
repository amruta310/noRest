import { Animal } from './../../models/animal.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-each',
  templateUrl: './animal-each.component.html',
  styleUrls: ['./animal-each.component.scss']
})
export class AnimalEachComponent implements OnInit {
  @Input() animalEach: Animal;
  @Output() divClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.animalEach);
    console.log(this.animalEach.name);
    console.log(this.animalEach.description);
  }

  onClick(event) {
    console.log('here');
    this.divClicked.emit(true);
  }
}
