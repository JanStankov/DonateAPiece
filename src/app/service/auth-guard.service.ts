import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Donation} from "../model/Donation";
import {DonationService} from "./donation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private donationService: DonationService) {
  }

  canActivate(): boolean {
    if (!this.donationService.isLogged) {
      if(confirm('You need to log in first. Do you want to be redirected to the login page?')) {
      this.router.navigate(["login"]);
      }
      return false;
    }
    return true;
  }
}
