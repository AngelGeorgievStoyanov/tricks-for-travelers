import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { AddCommentComponent } from "./add-comment/add-comment.component";
import { EditCommentComponent } from "./edit-comment/edit-comment.component";



const routes: Routes = [

    {
        path: 'add-comment/:tripId',
        pathMatch: 'full',
        component: AddCommentComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: true,
            authenticationFailureRedirectUrl: '/login',
        }
    },
    {
        path: 'edit-comment/:commentId',
        pathMatch: 'full',
        component: EditCommentComponent,
        canActivate: [AuthActivate],
        data: {
            authenticationRequired: true,
            authenticationFailureRedirectUrl: '/login',
        }
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommentRoutingModule { }