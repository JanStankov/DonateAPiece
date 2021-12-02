import {Component, OnInit} from '@angular/core';
import {DonationService} from "../../service/donation.service";
import {Donation} from "../../model/Donation";
import {AnimationType} from "../custom-carousel/carousel.animations";

@Component({
  selector: 'app-donation-requests-list',
  templateUrl: './donation-requests-list.component.html',
  styleUrls: ['./donation-requests-list.component.css']
})
export class DonationRequestsListComponent implements OnInit {

  donationRequests: Donation[] = []
  donationRequests2: Donation[] = []
  animationType = AnimationType.Scale;

  constructor(private donationService: DonationService) {
  }

  ngOnInit(): void {
    this.donationRequests = this.donationService.donationRequests
    this.donationRequests2 = this.donationService.donationRequests2
  }

}
