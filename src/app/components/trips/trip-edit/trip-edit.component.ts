import { Component, OnInit } from '@angular/core';
import { ITrip } from '../../shared/interfaces/user';
import { TripService } from 'src/app/services/trip.service';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent {


  trip: ITrip | undefined;

  errorMessage: string = '';

  constructor(private tripService: TripService, private activateRoute: ActivatedRoute, private router: Router) {

    this.fetchTrip()
  }




  fetchTrip(): void {
    this.trip = undefined;
    const id = this.activateRoute.snapshot.params;// activateRoute.snapshot.params['tripId'] ------- not work?!?
    const tripId = Object.values(id)[0]

    this.tripService.getTripById(tripId).subscribe({
      next: (data) => {
        if (data) {
         
          this.trip = data
        }
      },
      error:(err)=>{
        console.log(err)
        if(err){
          this.router.navigate(['/not-found'])
        }
      }
    } )
  }
   
  


  editTrip(form: NgForm) {

    if (form.invalid) {
      this.errorMessage = 'All field are required'
      return
    }

    const id = this.activateRoute.snapshot.params;// activateRoute.snapshot.params['tripId'] ------- not work?!?
    const tripId = Object.values(id)[0]
    this.tripService.editTripById(tripId, form.value).subscribe({
      next:()=>{
       
        this.router.navigate([`/trips/details/${tripId}`])
      },
      error:(err)=>{
        console.log(err)
        if(err){
          this.router.navigate(['/not-found'])
        }
      }
    })
  }

}
