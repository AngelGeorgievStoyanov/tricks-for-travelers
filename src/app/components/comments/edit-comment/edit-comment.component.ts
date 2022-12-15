import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { IComment } from '../../shared/interfaces/user';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent {


  comment: IComment | undefined
  constructor(private router: Router, private activateRoute: ActivatedRoute, private commentService: CommentService) {
    this.fetchComment()
  }


  back(): void {
    this.router.navigate(['/trips'])
  }

  fetchComment() {
    this.comment = undefined;
    const id = this.activateRoute.snapshot.params['commentId'];


    this.commentService.getCommentById(id).subscribe((data) => {
      this.comment = data
    })

  }

  editComment(form:NgForm){

    const id = this.activateRoute.snapshot.params['commentId'];// activateRoute.snapshot.params['commentId'] ------- not work?!?

    this.commentService.editCommentById(id,form.value).subscribe({
      next:()=>{
        this.router.navigate(['/trips'])
      }
    })
  }

}
