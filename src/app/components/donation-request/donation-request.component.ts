import {Component, Input, OnInit} from '@angular/core';
import {Donation} from "../../model/Donation";
import {DonationService} from "../../service/donation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-donation-request',
  templateUrl: './donation-request.component.html',
  styleUrls: ['./donation-request.component.css']
})
export class DonationRequestComponent implements OnInit {

  @Input() donationRequest: Donation
  @Input() id: number

  constructor(private donationService: DonationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  donate(id: number) {
    this.donationService.donationRequests.splice(id, 1)
    this.donationService.users[0].points++

  }
}
