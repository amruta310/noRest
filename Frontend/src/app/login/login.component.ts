// import { ControlMessagesComponent } from './../control-messages/control-messages.component';
// import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
// import { HttpService } from './../http.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import {Inject} from '@angular/core';
// import { User } from '../../../../Backend/api/models/userSchema';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { FormBuilder, Validators } from '@angular/forms';
// import { ValidationService } from '../validation.service';

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Inject} from '@angular/core';
import { User } from '../../../../Backend/api/models/userSchema';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userForm: any;
  username: string;
  password: string;
  param: string;
  currentUser: User;
  @Output() outputUser: EventEmitter<object> = new EventEmitter<object>();
  @Input() openDialogSignUp: boolean;

  constructor(private _http: HttpService, @Inject(ActivatedRoute) private _activatedroute : ActivatedRoute, private _router: Router,
   public dialogRef: MatDialogRef<LoginComponent>/*, private formBuilder: FormBuilder*/) {
    this.param = this._activatedroute.snapshot.params['param'];
    // this.userForm = this.formBuilder.group({
    //   username: ['', Validators.required,  Validators.minLength(10)],
    //   password: ['', [Validators.required]]
    // });
  }

  ngOnInit() {

  }

  getUser(user) {
    // if (this.userForm.dirty && this.userForm.valid) {
    //   alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    // }
    // else {
      this._http.getUser().subscribe(data => {
        for (let usr of Object.keys(data)){
          if (data[usr].username == user.username) {
            this.currentUser = data[usr];
          }
        }
        this.outputUser.emit(this.currentUser);
        this.dialogRef.close(this.currentUser);
      });
    // }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
