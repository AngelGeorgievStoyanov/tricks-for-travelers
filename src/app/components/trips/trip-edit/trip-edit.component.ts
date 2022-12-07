import { Component, OnInit } from '@angular/core';
import { ITrip } from '../../shared/interfaces/user';
import { TripService } from 'src/app/services/trip.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent {


  trip: ITrip | undefined;



  constructor(private tripService: TripService, private activateRoute: ActivatedRoute) {

    this.fetchTrip()
  }




  fetchTrip(): void {
    this.trip = undefined;
    const id = this.activateRoute.snapshot.params;// activateRoute.snapshot.params['tripId'] ------- not work?!?
    const tripId = Object.values(id)[0]

    this.tripService.getTripById(tripId).subscribe((data) => {
      this.trip = data
      console.log(this.trip)
    })
  }


  editTrip(form: NgForm) {

    console.log(form.value)
    const id = this.activateRoute.snapshot.params;// activateRoute.snapshot.params['tripId'] ------- not work?!?
    const tripId = Object.values(id)[0]
    this.tripService.editTripById(tripId, form.value).subscribe(console.log)
  }

}
