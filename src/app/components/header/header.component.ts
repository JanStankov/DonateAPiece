import {Component, OnInit} from '@angular/core';
import {DonationService} from "../../service/donation.service";
import {DonationDialogContentComponent} from "../dialogs/donation-dialog-content/donation-dialog-content.component";
import {MatDialog} from "@angular/material/dialog";
import {
  AskForDonationDialogContentComponent
} from "../dialogs/ask-for-donation-dialog-content/ask-for-donation-dialog-content.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public donationService: DonationService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }


  openDialog(ask: boolean) {

    if (!this.donationService.isLogged) {
      if (confirm("You need to log in first. Do you want to be redirected to the login page?")) {
        this.router.navigate(["login"])
      }
    } else {
      const dialogRef = this.dialog.open(ask ? AskForDonationDialogContentComponent : DonationDialogContentComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

}


