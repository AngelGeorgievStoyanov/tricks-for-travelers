import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { UserService } from 'src/app/services/user.service';
import { ITrip, IUser } from '../../shared/interfaces/user';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent {


  trip: ITrip | undefined;

  user: IUser | undefined;


  constructor(private tripService: TripService,
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) {

    this.fetchTrip()
  }

  fetchTrip(): void {
    this.trip = undefined;
    const id = this.activateRoute.snapshot.params['tripId'];


    this.tripService.getTripById(id).subscribe((data) => {
      if (data) {
        this.trip = data

      }
      console.log(this.trip)
    })
  }


  delTrip(id: string): void {
    console.log(id)
    this.tripService.deliteTripById(id).subscribe(console.log)
  }

  like(tripId: string) {
    let userId: string | undefined
    if (this.userService.user?._id !== undefined) {

      userId = this.userService.user?._id
      console.log(userId)

      this.trip?.likes.push(userId)

    } else if (localStorage.getItem('userId') !== undefined) {

      userId = localStorage.getItem('userId') as string
      console.log(userId, '--local--')
      this.trip?.likes.push(userId)
    } else {
      userId = undefined

    }
    console.log(this.trip, '--trip like---')

    if (userId !== undefined && this.trip !== undefined) {
      this.tripService.editTripById(tripId, this.trip).subscribe({
        next: () => {

          this.router.navigate([`/trips/details/${tripId}`])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }

  }


  addComment(tripId: string ) {
    if(this.user===undefined){
      const userId = localStorage.getItem('userId') ? localStorage.getItem('userId'): ''
      console.log(tripId)
      console.log(userId,'--userId--')
      this.router.navigate([`/comments/add-comment/${tripId}`])
    }
  }
}


