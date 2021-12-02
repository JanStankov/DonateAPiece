import {Component, Input, OnInit} from '@angular/core';
import {Donation} from "../../model/Donation";
import {DonationService} from "../../service/donation.service";

@Component({
  selector: 'app-donation-claim',
  templateUrl: './donation-claim.component.html',
  styleUrls: ['./donation-claim.component.css']
})
export class DonationClaimComponent implements OnInit {

  @Input() donationToClaim: Donation
  @Input() id: number

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
  }

  claimDonation(id: number) {
    this.donationService.donationsToClaim.splice(id, 1)
    this.donationService.users[0].claims++
  }
}
