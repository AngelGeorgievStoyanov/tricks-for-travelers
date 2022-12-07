import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { ITrip } from '../../shared/interfaces/user';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent {


  trip: ITrip | undefined;
 


  constructor(private tripService: TripService, private activateRoute: ActivatedRoute) {

    this.fetchTrip()
  }

  fetchTrip(): void {
    this.trip = undefined;
    const id = this.activateRoute.snapshot.params['tripId'];
    

    this.tripService.getTripById(id).subscribe((data)=>{
      if(data){
        this.trip=data

      }
      console.log(this.trip)
    })
  }


}
