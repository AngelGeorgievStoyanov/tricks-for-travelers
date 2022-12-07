import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { TripsAllComponent } from './trips-all/trips-all.component';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';

const routes: Routes=[


  {
    path:'',
    pathMatch:'full',
    component: TripsAllComponent

  },
  {
    path:'add-new-trip',
    component:TripCreateComponent
  },
  {
    path:'details/:tripId',
    pathMatch: 'full',
    component: TripDetailsComponent
  },
  {
    path:'edit/:tripId ',
    pathMatch:'full',
    component:TripEditComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
 
})
export class TripsRoutingModule { }
