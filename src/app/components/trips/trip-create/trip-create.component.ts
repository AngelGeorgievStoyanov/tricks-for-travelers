import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
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
      title: [''],
      description: [''],
      imageUrl: [''],
      transport: [''],
      countPeoples: [''],
      typeOfPeople: [''],
      destination: [''],
      coments: [new Array],
      likes: [new Array],
      _ownerId: this.userId,
      price:['']

    })
  }




  addTrip(): void {

    this.tripService.createTrip(this.form.value).subscribe({
      next: (() => {
        this.router.navigate(['/trips'])
      })
    })



  }

}


