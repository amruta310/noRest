import { Injectable } from '@angular/core';
import { AnimalSchema } from './../../../Backend/api/models/animalSchema';
import { EventSchema } from './../../../Backend/api/models/eventSchema';
import { HttpClient } from '@angular/common/http';
import { Comments } from './../../../Backend/api/models/commentSchema';
import { User } from './../../../Backend/api/models/userSchema';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private animalUrl = 'http://localhost:3000/animals';
  private eventUrl = 'http://localhost:3000/events';
  private commentUrl = 'http://localhost:3000/comments';
  private userUrl = 'http://localhost:3000/users';

  constructor(public _http: HttpClient) { }

  getAnimals() {
    return this._http.get<AnimalSchema[]>(this.animalUrl);
  }

  getEvents() {
    return this._http.get<EventSchema[]>(this.eventUrl);
  }

  getComments() {
    return this._http.get<Comments[]>(this.commentUrl);
  }

  addComment(comments: Comments) {
    return this._http.post<Comments>(this.commentUrl, comments);
  }

  addUser(user: User) {
    return this._http.post<User>(this.userUrl, user);
  }

  getUser() {
    return this._http.get<User>(this.userUrl);
  }
}
