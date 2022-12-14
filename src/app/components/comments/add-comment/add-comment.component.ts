import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

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

  form: FormGroup
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private commentService: CommentService,
    private router: Router) {
    this.form = this.fb.group({
      description: [''],
      _ownerId: this.userId,
      nameAuthor: this.nameAuthor,
      _tripId: this.activateRoute.snapshot.params['tripId']

    })
  }


  addcoment(): void {

    const id = this.activateRoute.snapshot.params['tripId'];
    console.log(this.form.value)
    this.commentService.createComment(this.form.value).subscribe({
      next: () =>
        this.router.navigate([`/trips/details/${id}`])
    })


  }
}
