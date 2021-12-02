import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../service/donation.service";
import {Donation} from "../../model/Donation";

@Component({
  selector: 'app-donation-requests-list',
  templateUrl: './donation-requests-list.component.html',
  styleUrls: ['./donation-requests-list.component.css']
})
export class DonationRequestsListComponent implements OnInit {

  donationRequests: Donation[] = []

  constructor(private donationService: DonationService) { }

  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
    this.donationRequests = this.donationService.donationRequests
    this.slides = this.chunk(this.donationRequests, 3);

  }

}
