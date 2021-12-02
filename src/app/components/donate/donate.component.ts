import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DonationService} from "../../service/donation.service";
import {Route, Router} from "@angular/router";
import {Donation} from "../../model/Donation";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  donateForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,
              private donationService: DonationService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.donationService.donationsToClaim.push(new Donation(this.donateForm.value.title, this.donateForm.value.description,""))
    console.log("click")
    this.router.navigate(["home"])
  }

}
