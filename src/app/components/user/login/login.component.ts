import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  token = '';

  constructor(
    private userSerice: UserService,
    private router: Router
  ) { }

  login(form: NgForm): void {
    const { email, password } = form.value;
console.log(email,password)
    this.userSerice.login({ email, password }).subscribe({
      next: (user) => {
        this.token = user.accessToken;
     
      },
      error: (err) => {
        console.log(err,'error')
      }
    })
  }
}
