import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Inject} from '@angular/core';
import { User } from '../../../../Backend/api/models/userSchema';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  name: string;
  username: string;
  password: string;
  address: string;
  param: string;
  currentUser: User;
  dateOfBirth: Date;

  @Output() outputUser: EventEmitter<object> = new EventEmitter<object>();
  @Input() openDialogSignUp: boolean;

  constructor(private _http: HttpService, @Inject(ActivatedRoute) private _activatedroute : ActivatedRoute, private _router: Router,
  public dialogRef: MatDialogRef<SignUpComponent>) {
    this.param = this._activatedroute.snapshot.params['param'];
  }

  ngOnInit() {

  }

  saveUser(user) {
    user.type = 'User';
    user.name = this.name;
    user.username = this.username;
    user.password = this.password;
    user.dob = this.dateOfBirth;
    user.address = user.address;

    console.log(user);
    console.log(user.name);
    if(user.name != undefined){
      this._http.addUser(user).subscribe(data => {
        this.currentUser = data;
        this.dialogRef.close(this.currentUser);
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
