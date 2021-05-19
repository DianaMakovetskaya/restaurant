import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  userdata: any;
  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data) {
    if(data){
      this.userdata = data;
    }
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialog.closeAll();
  }
}
