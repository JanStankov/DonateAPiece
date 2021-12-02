import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../service/donation.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-top-contributors',
  templateUrl: './top-contributors.component.html',
  styleUrls: ['./top-contributors.component.css']
})
export class TopContributorsComponent implements OnInit {

  topContributors: User[] = []

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.topContributors = this.donationService.users.sort((a, b) => (a.points > b.points ? -1 : 1)).slice(0, 3)
  }

}
