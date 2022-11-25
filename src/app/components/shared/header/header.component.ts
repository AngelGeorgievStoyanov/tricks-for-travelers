import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {




  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get email(): string {
    let email = this.userService.user?.email || '';
    email = email.split('@')[0]
    return email
  }
  get user() {
    return this.userService.user
  }
  token :string|any;
  constructor(private userService: UserService,
    private router: Router) { }


  logout(): void {
    this.token = this.user!.accessToken
    this.userService.logout({token:this.token}).subscribe()
  }

}
