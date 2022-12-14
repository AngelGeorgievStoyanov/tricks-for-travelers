import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IUser } from "../components/shared/interfaces/user";
import { tap } from 'rxjs/operators';


const apiURL = environment.apiURL;

@Injectable()
export class UserService {

    user: IUser | null | undefined = undefined;

    get isLogged(): boolean {
        return !!this.user;
    }

    constructor(private http: HttpClient) { }


    register(data: { email: string; pasword: string }) {

        return this.http.post<IUser>(`${apiURL}/users/register`, data, { withCredentials: false }).pipe(
            tap((user) => this.user = user)
        )


    }

    login(data: { email: string; password: string }) {

        return this.http.post<IUser>(`${apiURL}/users/login`, data, { withCredentials: false }).pipe(
            tap((user) => {
                // TODO ? localStorage.setItem(`${user._id}`, JSON.stringify(user))

                this.user = user
            })

        );
    }


    logout(data: { token: string }) {


        return this.http.post<IUser>(`${apiURL}/users/logout`, data, { withCredentials: false }).pipe(
            tap(() => this.user = null)
        )
    }


}

