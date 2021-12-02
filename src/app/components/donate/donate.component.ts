import {Component, OnInit, Sanitizer} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DonationService} from "../../service/donation.service";
import {Route, Router} from "@angular/router";
import {Donation} from "../../model/Donation";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  url = ""

  donateForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    imgUrl: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
              private donationService: DonationService,
              private router: Router,
              private matDialogRef: MatDialogRef<DonateComponent>) {
  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.donationService.donationsToClaim.push(new Donation(this.donateForm.value.title,
                                                            this.donateForm.value.description,
                                                            this.url))
    this.matDialogRef.close()
    // console.log("click")
    // this.router.navigate(["home"])
  }

  onselectFile(e) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event: any) => {
        this.url = event.target.result

      }
    }
  }
}
