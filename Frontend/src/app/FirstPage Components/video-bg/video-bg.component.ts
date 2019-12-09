import { MatDialog } from '@angular/material/dialog';
import { DonationComponent } from './../../donation/donation.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-bg',
  templateUrl: './video-bg.component.html',
  styleUrls: ['./video-bg.component.scss']
})
export class VideoBgComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDonation() {
    const dialogRef = this.dialog.open(DonationComponent, {
      width: '37%',
      height: '455px'
    });
  }
}
