import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.css']
})
export class TripCreateComponent {


  form: FormGroup;

  errorMessage: string | undefined;


  get userId(): string {
    if (this.userService.user?._id !== undefined) {
      return this.userService.user?._id
    } else if (localStorage.getItem('userId')) {
      return localStorage.getItem('userId') || ''
    } else {
      return ''
    }
  }

  constructor(
    private tripService: TripService,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,

  ) {
    this.form = this.fb.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      imageUrl: ['',[Validators.required]],
      transport: ['',[Validators.required]],
      countPeoples: ['',[Validators.required]],
      typeOfPeople: ['',[Validators.required]],
      destination: ['',[Validators.required]],
      coments: [new Array],
      likes: [new Array],
      _ownerId: this.userId,
      price: ['',[Validators.required]]

    })
  }

  get m(){
    return this.form.controls;
  }


  addTrip(): void {

    if(this.form.invalid){
      this.errorMessage='Plece write add form'
      return
    }

    this.tripService.createTrip(this.form.value).subscribe({
      next: (() => {
        this.router.navigate(['/trips'])
      })
    })



  }

}


