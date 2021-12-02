import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../service/donation.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = []

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.userList = this.donationService.users
  }

}
