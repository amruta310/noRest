import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from '../../http.service';
import { Question } from '../../../../../Backend/api/models/askQuestion';
@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.scss']
})
export class AskquestionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AskquestionComponent>,public dialog: MatDialog,private _http: HttpService) { }
  Question:Question;
  ngOnInit() {
  }

  closeDialog(){
    this.dialogRef.close();
  }

  addQuestion(ques) {
    this._http.addQuestion(ques).subscribe(data => {
      console.log('inside first ' + data);
    });
  }
}
