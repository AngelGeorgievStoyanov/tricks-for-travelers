import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.css']
})
export class TripCreateComponent {



  constructor(
private tripService:TripService

  ) {


  }




  addTrip(form: NgForm): void {
    const { name, description, imageUrl } = form.value
   
    
this.tripService.createTrip({name,description,imageUrl}).subscribe({
  next:(console.log)
})



  }

}


