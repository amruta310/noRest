import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  amount:number;
  constructor(@Inject(ActivatedRoute) private _activatedroute : ActivatedRoute, private _router: Router) { }

  ngOnInit() {

    this.amount = this._activatedroute.snapshot.params['donationAmount'];
    console.log(this.amount);

  }

}
