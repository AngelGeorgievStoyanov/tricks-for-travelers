import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { TripsAllComponent } from './trips-all/trips-all.component';
import { TripsRoutingModule } from './trips-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripService } from 'src/app/services/trip.service';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';



@NgModule({
  declarations: [
    TripsAllComponent,   
    TripCreateComponent, 
    TripDetailsComponent, 
    TripEditComponent


  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers:[
  
  ]
})
export class TripsModule { }
