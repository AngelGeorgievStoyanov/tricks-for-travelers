import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { TripsAllComponent } from './trips-all/trips-all.component';
import { TripCreateComponent } from './trip-create/trip-create.component';

const routes: Routes=[


  {
    path:'',
    pathMatch:'full',
    component: TripsAllComponent

  },
  {
    path:'new-game',
    component:TripCreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
 
})
export class TripsRoutingModule { }
