import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { TripService } from 'src/app/services/trip.service';
import { UserService } from 'src/app/services/user.service';
import { ITrip } from '../../shared/interfaces/user';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {


  get userId(): string {
    if (this.userService.user?._id !== undefined) {
      return this.userService.user?._id
    } else if (localStorage.getItem('userId')) {
      return localStorage.getItem('userId') || ''
    } else {
      return ''
    }
  }

  get nameAuthor(): string {
    if (this.userService.user?.email !== undefined) {
      return this.userService.user?.email
    } else if (localStorage.getItem('email')) {
      return localStorage.getItem('email') || ''
    } else {
      return ''
    }
  }
  errorMessage: string | undefined
  title: string | undefined
  trip: any = {}
  form: FormGroup
  tripId: string | undefined
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private commentService: CommentService,
    private router: Router,
  ) {

this.tripId=this.activateRoute.snapshot.params['tripId']

    this.form = this.fb.group({
      comment: ['', [Validators.required]],
      _ownerId: this.userId,
      nameAuthor: this.nameAuthor,
      _tripId: this.activateRoute.snapshot.params['tripId'],


    })
  }


  addcoment(): void {
    if (this.form.invalid) {
      this.errorMessage = 'Pleace write a comment'
      return
    }
    const id = this.activateRoute.snapshot.params['tripId'];

    this.commentService.createComment(this.form.value).subscribe({
      next: () =>
        this.router.navigate([`/trips/details/${id}`])
    })


  }
}
