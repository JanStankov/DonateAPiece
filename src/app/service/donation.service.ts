import {Injectable} from '@angular/core';
import {User} from "../model/User";
import {Donation} from "../model/Donation";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  isLogged = false
  users = [
    new User("Ognen", "Todorovski", "asd@asd.com", "qwerty"),
    new User("asd", "Todorovski", "asd@asd.com", "qwerty"),
    new User("dsa", "Todorovski", "asd@asd.com", "qwerty"),
    new User("bcs", "Todorovski", "asd@asd.com", "qwerty"),
    new User("qwe", "Todorovski", "asd@asd.com", "qwerty"),
  ]

  donationRequests = [
    new Donation("Kaput", "Baram kaput za vo zima", "assets/images/img1.jpg"),
    new Donation("Kaput", "Baram kaput za vo zima", "assets/images/img2.jpg"),
    new Donation("Kaput", "Baram kaput za vo zima", "assets/images/img3.jpg"),
    //new Donation("Kaput", "Baram kaput za vo zima", "assets/images/img1.jpg")
  ]

  donationsToClaim = [
    new Donation("Tanktop", "crn tanktop za bilderi odlichen pogotovo so dobro ramo", "assets/images/img1.jpg"),
    new Donation("Maica", "Ubav crn kaput za vo zima, nosen 6 meseci", "assets/images/img2.jpg"),
    new Donation("Bluza po dolgi", "Ubav crn kaput za vo zima, nosen 6 meseci", "assets/images/img3.jpg"),
  ]

  constructor(private router: Router) {
  }

  login(loginInfo: User) {
    console.log(loginInfo)
    if (this.users[0].name == loginInfo.name && this.users[0].password == loginInfo.password) {
      this.isLogged = true
      console.log(this.isLogged)
      this.router.navigateByUrl("/home")
    }
  }
}
