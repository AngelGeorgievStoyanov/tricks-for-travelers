import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { ITrip } from '../../shared/interfaces/user';

@Component({
  selector: 'app-trips-all',
  templateUrl: './trips-all.component.html',
  styleUrls: ['./trips-all.component.css']
})
export class TripsAllComponent {

  trips: ITrip[] | undefined;

  constructor(private tripService: TripService) {
    this.fetchTrips()
  }

  fetchTrips(): void {
    this.trips=undefined;
    this.tripService.getAllTrips().subscribe(data=>{
      this.trips=Object.values(data)
      console.log(this.trips)
    })

  }



}
