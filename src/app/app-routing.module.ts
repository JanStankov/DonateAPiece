import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {LoginComponent} from "./components/login/login.component";
import {AboutComponent} from "./components/about/about.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {UserViewComponent} from "./components/user-view/user-view.component";
import {AskForDonationComponent} from "./components/ask-for-donation/ask-for-donation.component";
import {DonateComponent} from "./components/donate/donate.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-view/:id', component: UserViewComponent },
  { path: 'ask-for-donation', component: AskForDonationComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
