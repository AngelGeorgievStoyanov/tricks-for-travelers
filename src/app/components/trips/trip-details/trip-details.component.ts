import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
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
  userId: string | undefined | null;

  isLiked: string[] | undefined

  constructor(private tripService: TripService,
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private commentService: CommentService) {

    this.fetchTrip()
  }

  fetchTrip(): void {
    this.trip = undefined;
    this.userId = this.userService.user?._id;

    if (this.userId === undefined) {
      this.userId = localStorage.getItem('userId')
    }
    const id = this.activateRoute.snapshot.params['tripId'];


    this.tripService.getTripById(id).subscribe({
      next: (data) => {
        if (data) {

          this.trip = data
          this.isLiked = this.trip.likes.filter((x) => x === this.userId)
        }
      },
      error: (err) => {
        console.log(err)
        if (err) {
          this.router.navigate(['/not-found'])
        }
      }
    }



    )
  }


  delTrip(id: string): void {
    console.log(id, 'details')

    

    this.tripService.deleteTripById(id).subscribe({
      next: () => {
        this.commentService.deleteCommentByOwnerId(id).subscribe({
          next: () => {
           
          }
        }),
        this.router.navigate(['/trips'])
      }
    })
  }



  like(tripId: string) {

    if (this.userService.user?._id !== undefined) {

      this.userId = this.userService.user?._id

      this.trip?.likes.push(this.userId)

    } else if (localStorage.getItem('userId') !== undefined) {

      this.userId = localStorage.getItem('userId') as string
      this.trip?.likes.push(this.userId)
    } else {
      this.userId = undefined

    }

    if (this.userId !== undefined && this.trip !== undefined) {
      this.tripService.editTripById(tripId, this.trip).subscribe({
        next: () => {
          (document.getElementById('btnLike') as HTMLButtonElement).disabled = true

          this.router.navigate([`/trips/details/${tripId}`])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }

  }


  addComment(tripId: string) {
    if (this.user === undefined) {
      const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : ''
      this.router.navigate([`/comments/add-comment/${tripId}`])
    }
  }
}


