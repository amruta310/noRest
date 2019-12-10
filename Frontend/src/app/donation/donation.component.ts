import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit,EventEmitter, Output } from '@angular/core';
// import { Donation } from '../models/Donation';
import { HttpService } from './../http.service';
import {Donation} from '../../../../Backend/api/models/donationSchema';
import {Router} from '@angular/router';
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
  openPayment: boolean = false;
  @Output() loadPayment = new EventEmitter<any>();

  constructor(private _http: HttpService, public dialogRef: MatDialogRef<DonationComponent>, private router: Router){}
  ngOnInit() {}

  addDonation(donation) {
    console.log(donation);
       console.log(donation.email);
      // this._emailService.sendEmail({
      //   from: 'Mailgun Sandbox <postmaster@sandboxyourapikeysetXXXXXX.mailgun.org>',
      //   to: email,
      //   name: name,
      //   text: comment,
      // })
      // .subscribe(
      //   () => {},
      // );
       this._http.addDonation(donation).subscribe(data => {
        for (let usr of Object.keys(data)){

        }
        this.openPayment = true;
        this.router.navigate(['/payment', this.donationAmount]);
        this.dialogRef.close(
          this.loadPayment.emit()
        );
      });
  }
  closeComp(){
    this.openPayment = true;
    this.dialogRef.close(
     this.loadPayment.emit()
    );
    // this.dialogRef.afterClosed().subscribe(() => {

    // });
  }
  insideDonation(){
    // console.log('inside donation');
    // this.loadPayment.emit();
  }
}
