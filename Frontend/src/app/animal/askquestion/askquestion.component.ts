import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.scss']
})
export class AskquestionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AskquestionComponent>,public dialog: MatDialog) { }

  ngOnInit() {
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
