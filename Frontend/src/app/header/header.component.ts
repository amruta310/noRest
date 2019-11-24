import { SharedService } from '../shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private popup: SharedService, private _router: Router) { }

  ngOnInit() {
  }

  openSignUp() {
    this._router.navigate(['/signUpOrLogin' + '/SignUp']);
  }

  openLogin() {
    this._router.navigate(['/signUpOrLogin' + '/Login']);
  }

}
