import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/User";
import {DonationService} from "../../service/donation.service";
import {catchError, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user$: Observable<User | null>

  constructor(private route: ActivatedRoute,
              private router: Router,
              private donationService: DonationService) {
  }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      map(params => {
        const id = params.get('id');
        return this.donationService.users[id]
      })
    )
  }

}
