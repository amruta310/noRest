import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Donation } from '../models/Donation';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  firstName:string;
  lastName:string;
  email:string;
  donationAmount:string;
  donations:Donation[];
  @Output() addDonation: EventEmitter<any>= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {
    const donation={
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      donationAmount:this.donationAmount
    }

    this.addDonation.emit(donation);

  }

}
