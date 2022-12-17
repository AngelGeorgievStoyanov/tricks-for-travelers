import { NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { UserModule } from './components/user/user.module';
import { LocalStorage } from './services/injection-tokens-local-storage';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TripService } from './services/trip.service';
import { TripsModule } from './components/trips/trips.module';
import { AddCommentComponent } from './components/comments/add-comment/add-comment.component';
import { EditCommentComponent } from './components/comments/edit-comment/edit-comment.component';
import { CommentService } from './services/comment.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UserModule,
   
    AppRoutingModule
  ],
  providers: [
    TripService,
    CommentService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
