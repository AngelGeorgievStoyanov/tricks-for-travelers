
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IComment } from "../components/shared/interfaces/user";


const apiURL = environment.apiURL;


@Injectable()
export class CommentService {



    constructor(private http: HttpClient) { }



    createComment({ ...data }) {
        return this.http.post<IComment>(`${apiURL}/data/comments`, data, { withCredentials: false })
    }


    getCommentByTripId(tripId: string) {
        return this.http.get<IComment>(`${apiURL}/data/comments/trip/${tripId}`)
    }

    deleteCommentById(commentId: string) {
        return this.http.delete<IComment>(`${apiURL}/data/comments/${commentId}`)

    }

    getCommentById(commentId:string){
        return this.http.get<IComment>(`${apiURL}/data/comments/${commentId}`)
    }

    editCommentById(commentId:string, comment:IComment){
        return this.http.put<IComment>(`${apiURL}/data/comments/${commentId}`,comment,{withCredentials:false})

    }


}