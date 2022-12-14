import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { CommentRoutingModule } from './comments-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCommentComponent,
    EditCommentComponent
  ],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    FormsModule,
    CommentRoutingModule,

  ]
})
export class CommentsModule { }
