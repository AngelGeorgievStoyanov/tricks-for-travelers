import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from '../../shared/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  token: string = '';
  errorMessage: string = '';

  constructor(
    private userSerice: UserService,
    private router: Router
  ) { }

  login(form: NgForm): void {
    this.errorMessage = '';
    if (form.invalid) {
      this.errorMessage = 'All field are required'
      return
    }
    this.errorMessage = '';
    const { email, password } = form.value;

    this.userSerice.login({ email, password }).subscribe({
      next: (user) => {
        this.token = user.accessToken;
        this.setSession(user)
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err, 'error')
        this.errorMessage=err.error.message
      }
    })
  }


  private setSession(user: IUser) {

    localStorage.setItem('userId', user._id);
    localStorage.setItem('email', user.email);
    localStorage.setItem('accessToken', user.accessToken);

  }
}
