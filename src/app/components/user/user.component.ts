import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User
  @Input() id: number

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.id)
  }

  viewUser() {
    this.router.navigate(['user-view', this.id])
  }
}
