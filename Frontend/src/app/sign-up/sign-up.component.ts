import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  name: string;
  username: string;
  password: string;
  param: string;

  constructor(private _http: HttpService, @Inject(ActivatedRoute) private _activatedroute : ActivatedRoute, private _router: Router) {
    console.log(this._activatedroute.snapshot.params['param']);
    this.param = this._activatedroute.snapshot.params['param'];
  }

  ngOnInit() {

  }

  saveUser(user) {
    user.type = 'User';
    this._http.addUser(user).subscribe(data => {
    });
  }

  getUser(user) {
    console.log(user.username);
    this._http.getUser(user.username).subscribe(data => {
      console.log(data);
    });
  }
}
