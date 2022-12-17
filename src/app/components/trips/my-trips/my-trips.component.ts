import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { TripService } from 'src/app/services/trip.service';
import { UserService } from 'src/app/services/user.service';
import { IComment, ITrip } from '../../shared/interfaces/user';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})


export class MyTripsComponent {

  userId: string | undefined | null;

  trips: ITrip[] | undefined;

  comments: IComment[] | undefined

  constructor(private userService: UserService, private tripService: TripService, private commentService: CommentService) {
    this.fetchMyTrips()


  }

  fetchMyTrips() {
    this.userId = this.userService.user?._id
    if (this.userId === undefined) {
      this.userId = localStorage.getItem('userId')
    }

    if ((this.userId !== null) && (this.userId !== undefined)) {

      this.tripService.getAllMyTrips(this.userId).subscribe({
        next: (data) => {

          this.trips = Object.values(data)
console.log(this.trips)
        }
      })

      this.commentService.getAllMyComments(this.userId).subscribe({
        next: (data) => {
          this.comments = Object.values(data)

          console.log(this.comments)

          for (const key in this.comments) {
            
              const element = this.comments[key];

              console.log(element,'--------------')

              
              
            
          }
        }
      })
    }
  }


}
