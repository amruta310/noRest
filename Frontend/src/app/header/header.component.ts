import { SignUpComponent } from './../sign-up/sign-up.component';
import { SharedService } from '../shared.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
import { Donation } from '../models/Donation';
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
  @Output() goodToload: EventEmitter<object> = new EventEmitter<object>();

  constructor(private popup: SharedService, private _router: Router) {
    this.username = "";
    this.signIn = true;
   }

  ngOnInit() {
  }

  openSignUp() {
    //this._router.navigate(['/signUpOrLogin' + '/SignUp']);
    this.openSignUpPage = true;
  }

  openLogin() {
    //this._router.navigate(['/signUpOrLogin' + '/Login']);
    this.openSignUpPage = true;
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
  }
  // addDonation(donation:Donation)
  // {
  //   this._http.addDonation(donation).subscribe(donation=>{
  //     this.donations.push(donation);
  //   })
  // }
}
