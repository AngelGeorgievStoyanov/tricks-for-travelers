import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { TripService } from 'src/app/services/trip.service';
import { IComment, ITrip } from '../../shared/interfaces/user';

@Component({
  selector: 'app-trips-all',
  templateUrl: './trips-all.component.html',
  styleUrls: ['./trips-all.component.css']
})
export class TripsAllComponent {

  trips: ITrip[] | undefined;
  comments: IComment[] | undefined;


  tripId: string[] | undefined

  constructor(private tripService: TripService, 
    private commentService: CommentService,
    private router : Router) {
    this.fetchTrips()
  }

  fetchTrips(): void {
    this.trips = undefined;
    this.tripService.getAllTrips().subscribe(data => {
      this.trips = Object.values(data),

        this.tripId = this.trips.map((x) => { return x._id })


      this.tripId.map((x) => this.commentService.getCommentByTripId(x).subscribe(data => {

        this.comments = Object.values(data)
        if (this.comments !== undefined) {
          const parent = document.getElementById(x)
          this.comments.map((c) => {
            console.log(c)
            const div = document.createElement('div')
            div.id = c._id
            const h4 = document.createElement('h4')
            const p = document.createElement('p')
            const btnEditCmt = document.createElement('button')
            const btnDel = document.createElement('button')
            btnDel.innerText = 'DELETE COMMENT'
            btnEditCmt.innerText = 'EDIT COMMENT'
            btnDel.addEventListener('click', () => this.delComment(c._id))
            btnEditCmt.addEventListener('click', () => this.editComment(c._id))
            h4.textContent = c.nameAuthor
            p.textContent = c.comment
            div.appendChild(h4)
            div.appendChild(p)
            div.appendChild(btnDel)
            div.appendChild(btnEditCmt)
            parent?.append(div)


          })

        }
      }))

    })




  }


  delComment(cmtId: string): void {
    this.commentService.deleteCommentById(cmtId).subscribe(
      ()=>this.fetchTrips()
    )
  }


  editComment(cmtId: string): void {
    this.router.navigate([`/comments/edit-comment/${cmtId}`])
  }




}
