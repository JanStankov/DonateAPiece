import {Component, OnInit} from '@angular/core';
import {DonationService} from "../../service/donation.service";
import {DonationDialogContentComponent} from "../donation-dialog-content/donation-dialog-content.component";
import {MatDialog} from "@angular/material/dialog";
import {
  AskForDonationDialogContentComponent
} from "../ask-for-donation-dialog-content/ask-for-donation-dialog-content.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged

  constructor(public donationService: DonationService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.isLogged = this.donationService.isLogged
    console.log(this.isLogged)
  }


  openDialog(ask:boolean) {

    const dialogRef = this.dialog.open(ask ? AskForDonationDialogContentComponent : DonationDialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


