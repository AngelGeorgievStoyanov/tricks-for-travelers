
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IComment } from "../components/shared/interfaces/user";


const apiURL = environment.apiURL;


@Injectable()
export class CommentService {



    constructor(private http: HttpClient) { }



    createComment({ ...data }) {
        console.log(data)
        return this.http.post<IComment>(`${apiURL}/data/comments`, data, { withCredentials: false })
    }


}