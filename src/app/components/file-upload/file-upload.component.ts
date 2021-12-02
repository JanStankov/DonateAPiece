import {Component, OnInit} from '@angular/core';
import {DonationService} from "../../service/donation.service";
import {Donation} from "../../model/Donation";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  url = ""


  constructor(private donationService: DonationService) {
  }

  onselectFile(e) {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.donationService.donationsToClaim.push(new Donation("Kur", "hehe", this.url))
      }
    }
  }

  ngOnInit(): void {
  }
}
