import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Inject} from '@angular/core';
import { User } from '../../../../Backend/api/models/userSchema';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  name: string;
  username: string;
  password: string;
  param: string;
  currentUser: User;
  @Output() outputUser: EventEmitter<object> = new EventEmitter<object>();

  constructor(private _http: HttpService, @Inject(ActivatedRoute) private _activatedroute : ActivatedRoute, private _router: Router) {
    this.param = this._activatedroute.snapshot.params['param'];
  }

  ngOnInit() {

  }

  saveUser(user) {
    user.type = 'User';
    this._http.addUser(user).subscribe(data => {
      this.currentUser = data;
      this.outputUser.emit(this.currentUser);
    });
}

  getUser(user) {
    this._http.getUser().subscribe(data => {
      for (let usr of Object.keys(data)){
        if (data[usr].username == user.username) {
          this.currentUser = data[usr];
        }
      }
      this.outputUser.emit(this.currentUser);

    });
  }
}
