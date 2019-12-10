import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.scss']
})
export class AskquestionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AskquestionComponent>,public dialog: MatDialog,private _http: HttpService) { }
  Question:string;
  ngOnInit() {
  }

  closeDialog(){
    this.dialogRef.close();
  }
  addQuestion(question) {
    console.log(question);
    this._http.addQuestion(question).subscribe(data => {
      console.log("1" + data);
        for (let usr of Object.keys(data)){

        }
        //this.dialogRef.close();
      });
  }

}
