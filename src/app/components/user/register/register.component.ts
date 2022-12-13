import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from '../../shared/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  
  form: FormGroup;

  token: string = '';

  constructor( private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {

    this.form = this.fb.group({      
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpass: ['', [Validators.required]]
    });
    
  }

  register(): void {

    
    this.userService.register(this.form.value).subscribe({
      next: (user) => {
        this.token = user.accessToken;
        console.log(user)
        this.setSession(user)
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err, 'error')
      }
    })
   
  }

  private setSession(user: IUser) {

    localStorage.setItem('userId', user._id);
    localStorage.setItem('email', user.email);
    localStorage.setItem('accessToken', user.accessToken);

  }

}
