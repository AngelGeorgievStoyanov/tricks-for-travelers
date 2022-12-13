import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get local(): string | null {
    const userid = localStorage.getItem('userId')
    return userid
  }


  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get email(): string {
    let email = localStorage.getItem('email') || '';
    let index = email.indexOf('@')
    email = email.substring(0, index)
    return email
  }
  get user() {
    return this.userService.user
  }
  token: string | any;
  constructor(private userService: UserService,
    private router: Router) { }


  logout(): void {
    this.token = localStorage.getItem('accessToken')
    this.userService.logout({ token: this.token }).subscribe()
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken");

    this.router.navigate(['/login'])
  }

}

