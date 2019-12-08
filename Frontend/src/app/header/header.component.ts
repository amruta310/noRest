import { LoginComponent } from './../login/login.component';
import { SignUpComponent } from './../sign-up/sign-up.component';
import { SharedService } from '../shared.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
import { Donation } from '../models/Donation';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSignUpPage: boolean;
  signIn: boolean;
  username: string;
  donations:Donation[];
  showMe: boolean;
  @Output() goodToload: EventEmitter<object> = new EventEmitter<object>();

  constructor(private popup: SharedService, private _router: Router,  public dialog: MatDialog) {
    this.showMe= true;
    this.username = "";
    this.signIn = true;
   }

  ngOnInit() {
  }

  openSignUp() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '30%',
      height: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.username = "Welcome " + result.name;
        this.signIn = false;
      }
    });
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '30%',
      height: '260px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.username = "Welcome " + result.name;
        this.signIn = false;
        this.goodToload.emit(result);
        this.showMe = false;
      }
    });
  }

  openDashboard(event){
    this.goodToload.emit(event);
    this.showMe = false;
  }

  getOutputUser(event) {
    this.openSignUpPage = false;
    this.signIn = false;
    this.goodToload.emit(event);
    this.username = "Welcome " + event.username;
  }

  onSignOut() {
    //this._router.navigate(['/signUpOrLogin' + '/SignUp']);
    this.signIn = true;
    this.showMe = true;
  }
  // addDonation(donation:Donation)
  // {
  //   this._http.addDonation(donation).subscribe(donation=>{
  //     this.donations.push(donation);
  //   })
  // }
  setShowMe(){
    this.showMe = false;
  }
}
