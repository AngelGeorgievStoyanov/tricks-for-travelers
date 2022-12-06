import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ITrip } from "../components/shared/interfaces/user";

const apiURL = environment.apiURL;
@Injectable()
export class TripService{



    constructor(private http:HttpClient){}


    createTrip(data:{name:string,description:string,imageUrl:string}){



        return this.http.post<ITrip>(`${apiURL}/data/trips`,data,{withCredentials:false})
    }

    getAllTrips(){
        return this.http.get<ITrip[]>(`${apiURL}/data/trips`,{withCredentials:false})
    }




}