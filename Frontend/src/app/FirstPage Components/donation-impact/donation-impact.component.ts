import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';
import { AnimalSchema } from './../../../../../Backend/api/models/AnimalSchema';



@Component({
  selector: 'app-donation-impact',
  templateUrl: './donation-impact.component.html',
  styleUrls: ['./donation-impact.component.scss']
})
export class DonationImpactComponent implements OnInit {

  animals: AnimalSchema[];
  status : String;
  countStatus: number;
  animalcount: number;
  percentadopted : number;
  crueltycase : number;
  veterinarycarecount: number;
  
  

  constructor(private _http : HttpService, public sanitizer: DomSanitizer) {
    
    this.countStatus=0;
    this.animalcount=0;
    this.percentadopted=0;
    this.crueltycase=0;
    this.veterinarycarecount=10;    
   
  }

  ngOnInit() {
    this._http.gettodos().subscribe(data => {
      this.animals = data;

      for (let anm of this.animals) {
         
        this.animalcount = this.animalcount + 1 ;
        if( anm.status == "Adopted")
        {
            this.countStatus = this.countStatus + 1 ;
            this.percentadopted = ((this.countStatus/this.animalcount)*100);

            console.log(this.percentadopted);
            console.log(this.countStatus);
        }
      if ( anm.crueltyCase == "yes")
        {
            this.crueltycase = this.crueltycase + 1;
            console.log(this.crueltycase);
        }

    }
 
  });
}
}
