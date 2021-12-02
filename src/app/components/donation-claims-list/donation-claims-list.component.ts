import { Component, OnInit } from '@angular/core';
import {Donation} from "../../model/Donation";
import {DonationService} from "../../service/donation.service";

@Component({
  selector: 'app-donation-claims-list',
  templateUrl: './donation-claims-list.component.html',
  styleUrls: ['./donation-claims-list.component.css']
})
export class DonationClaimsListComponent implements OnInit {

  donationsToClaim: Donation[] = []

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.donationsToClaim = this.donationService.donationsToClaim
  }

}
