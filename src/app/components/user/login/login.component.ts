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

    this.userSerice.login({ email, password }).subscribe({
      next: (user) => {
        this.token = user.accessToken;
        console.log(this.token, '---tkoen---')
        console.log(user, '--user---')
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
