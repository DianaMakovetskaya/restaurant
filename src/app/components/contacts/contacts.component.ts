import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AlertComponent} from '../alert/alert.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  constructor(    private formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      phone: [null, Validators.required],
      name: [null, Validators.required],
      text: [null, Validators.required]
    });
  }

  submit(): void {
    if (!this.loginForm.valid) {
      return;
    }else{
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = this.loginForm.value;
      const dialogRef = this.dialog.open(AlertComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          if (result !== 'no') {
            console.log(result);
          } else if (result === 'no') {
            console.log('User clicked no.');
          }
        }
      });
    }
  }


}
