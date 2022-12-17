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
export class RegisterComponent {


  form: FormGroup;

  token: string = '';
  errorMessage: string = '';


  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {

    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpass: ['', [Validators.required]]
    },
    {
      validators:this.dontMantch('password','confirmpass')
    }
    );


  }

  register(): void {
    this.errorMessage = '';
    if (this.form.invalid) {
      this.errorMessage = 'All field are required'
      return
    }

    this.userService.register(this.form.value).subscribe({
      next: (user) => {
        this.token = user.accessToken;
        this.setSession(user)
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err, 'error')
        this.errorMessage = err.error.message;
      }
    })

  }

  private setSession(user: IUser) {

    localStorage.setItem('userId', user._id);
    localStorage.setItem('email', user.email);
    localStorage.setItem('accessToken', user.accessToken);

  }



  get f() {
    return this.form.controls
  }


  dontMantch(password: any, confirmpass: any) {

    return (formGroup: FormGroup) => {

      const passwordControl = formGroup.controls[password]
      const confirmpassControl = formGroup.controls[confirmpass]

      if (confirmpassControl.errors && !confirmpassControl.errors['dontMantch']) {
        return;
      }

      if(passwordControl.value !==confirmpassControl.value){
        confirmpassControl.setErrors({dontMantch:true})
      }else{
        confirmpassControl.setErrors(null)
      }
    }
  }


}
