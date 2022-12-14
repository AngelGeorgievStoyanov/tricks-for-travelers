import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ITrip } from "../components/shared/interfaces/user";

const apiURL = environment.apiURL;
@Injectable()
export class TripService{



    constructor(private http:HttpClient){}


    createTrip({...data}){

        return this.http.post<ITrip>(`${apiURL}/data/trips`,data,{withCredentials:false})
    }

    getAllTrips(){
        return this.http.get<ITrip[]>(`${apiURL}/data/trips`,{withCredentials:false})
    }


    getTripById(id:string){
        return this.http.get<ITrip>(`${apiURL}/data/trips/${id}`)
    }

    editTripById(id:string,trip:ITrip){
        return this.http.put<ITrip>(`${apiURL}/data/trips/${id}`,trip,{withCredentials:false})
    }

    deleteTripById(id:string){
        return this.http.delete<ITrip>(`${apiURL}/data/trips/${id}`)
    }

    getAllMyTrips(ownerId:string){
        return this.http.get<ITrip[]>(`${apiURL}/data/trips/my-trips/${ownerId}`)
    }

    getTopTrips(){
        console.log('tuk')
        return this.http.get<ITrip[]>(`${apiURL}/data/trips/top`,{withCredentials:false})
    }

}