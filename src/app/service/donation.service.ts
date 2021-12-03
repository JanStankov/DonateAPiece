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
    new User("Ognen", "Todorovski", "ognent@gmail.com", "qwerty","assets/images/ognen.jpg"),
    new User("Jan", "Stankov", "jan.stankov@gmail.com", "qwerty","assets/images/jan.jpg"),
    new User("Jane", "Doe", "jane@yahoo.com", "qwerty","assets/images/jane.jpg"),

  ]

  donationRequests = [
    new Donation("Jeans", "Looking for denim jeans", "assets/images/jeans.jpg"),
    new Donation("Woman T-Shirt", "Looking for a white t-shirt", "assets/images/maickaZenska.jpg"),
    new Donation("Hoodie", "Looking for a plain hoodie", "assets/images/dukserCrn.jpg"),
  ]


  donationsToClaim = [
    new Donation("T-Shirt", "Plain blue t-shirt", "assets/images/9-Petrol.png"),
    new Donation("Dress", "Beautiful red dress", "assets/images/fustan.jpg"),
    new Donation("sweater", "Comfortable sweater", "assets/images/bluzaSharena.jpg"),
  ]

  constructor(private router: Router) {
  }

  login(loginInfo: User) {
    console.log(loginInfo)
    // if (this.users[0].name == loginInfo.name && this.users[0].password == loginInfo.password) {
    this.isLogged = true
    console.log(this.isLogged)
    this.router.navigateByUrl("/home")
  }

}
