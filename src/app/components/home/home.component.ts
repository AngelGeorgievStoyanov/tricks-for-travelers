import { Component } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { ITrip } from '../shared/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  


  get local(): string | null {
    const userid = localStorage.getItem('userId')
    return userid
  }

  trips: ITrip[] | undefined

  constructor(private tripService: TripService) {
    this.fetchTrips()
  }

  fetchTrips():void {
    this.tripService.getTopTrips().subscribe({
      next:(data)=>{
        this.trips=Object.values(data),
        console.log(this.trips)
      }
    })
  }

}
