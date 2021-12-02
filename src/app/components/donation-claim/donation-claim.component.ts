import {Component, Input, OnInit} from '@angular/core';
import {Donation} from "../../model/Donation";
import {DonationService} from "../../service/donation.service";
import {MatDialog} from "@angular/material/dialog";
import {DonateDialogComponent} from "../dialogs/donate-dialog/donate-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-donation-claim',
  templateUrl: './donation-claim.component.html',
  styleUrls: ['./donation-claim.component.css']
})
export class DonationClaimComponent implements OnInit {

  @Input() donationToClaim: Donation
  @Input() id: number

  constructor(private donationService: DonationService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  claimDonation(id: number) {

    if (!this.donationService.isLogged) {
      if (confirm("You need to log in first. Do you want to be redirected to the login page?")) {
        this.router.navigate(["login"])
      }
    } else {

      const dialogRef = this.dialog.open(DonateDialogComponent, {
        data: {
          title: "Claim Donations",
          buttonText: "Claim Donation"
        }
      })

      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.donationService.donationsToClaim.splice(id, 1)
          this.donationService.users[0].claims++
        }
      })
    }
  }
}
