import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  
  form: FormGroup;



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

    console.log(this.form.value)
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      }
    })
   
  }

  

}
