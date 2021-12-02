import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Donation} from "../../model/Donation";
import {DonationService} from "../../service/donation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,
              private donationService: DonationService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.donationService.login(this.loginForm.value)
  }

}
