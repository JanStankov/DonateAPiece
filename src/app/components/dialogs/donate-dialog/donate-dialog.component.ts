import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DonationService} from "../../../service/donation.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-donate-dialog',
  templateUrl: './donate-dialog.component.html',
  styleUrls: ['./donate-dialog.component.css']
})
export class DonateDialogComponent implements OnInit {

  title = ""
  buttonText = ""

  donateForm = this.formBuilder.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,
              private donationService: DonationService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA)
              private data: any,
              private dialogRef: MatDialogRef<DonateDialogComponent>) {
    if(data) {
      this.title = data.title
      this.buttonText = data.buttonText
    }
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.dialogRef.close(true)
    alert("You successfully applied to donate this item !")
  }

}
