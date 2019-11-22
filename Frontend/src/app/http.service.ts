import { Injectable } from '@angular/core';
import { AnimalSchema } from './../../../Backend/api/models/animalSchema';
import { EventSchema } from './../../../Backend/api/models/eventSchema';
import { HttpClient } from '@angular/common/http';
import { CommentSchema } from "./../../../Backend/api/models/commentSchema";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private animalUrl = 'http://localhost:3000/animals';
  private eventUrl = 'http://localhost:3000/events';
  private commentUrl = 'http://localhost:3000/comments';


  constructor(public _http: HttpClient) { }

  getAnimals() {
    return this._http.get<AnimalSchema[]>(this.animalUrl);
  }

  getEvents() {
    return this._http.get<EventSchema[]>(this.eventUrl);
  }

  getComments() {
    return this._http.get<CommentSchema[]>(this.commentUrl);
  }


}
