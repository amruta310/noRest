import { Component, OnInit,EventEmitter, Output } from '@angular/core';
// import { Donation } from '../models/Donation';
import { HttpService } from './../http.service';
import {Donation} from '../../../../Backend/api/models/donationSchema';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  firstName: any;
  lastName: string;
  email: string;
  donationAmount: string;
  postDonation: Donation;

  constructor(private _http: HttpService){}
  ngOnInit() {}
  addDonation(user) {
    // console.log(this.postDonation);

       this._http.addDonation(user).subscribe(data => {
        for (let usr of Object.keys(data)){

        }
      });
  }

}
