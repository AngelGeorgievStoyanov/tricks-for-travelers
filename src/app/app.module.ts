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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCommentComponent,
    EditCommentComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UserModule,
   
    AppRoutingModule
  ],
  providers: [
    TripService
    // {
    //   provide: LocalStorage,
    //   useFactory: (platformId: Object) => {

    //     if (isPlatformBrowser(platformId)) {
    //       return window.localStorage;
    //     }
    //     if (isPlatformServer(platformId)) {
    //       return class implements Storage {
    //         length = 0;
    //         private data: Record<string, string> = {};

    //         clear(): void {
    //           this.data = {};
    //         }

    //         getItem(key: string): string | null {
    //           return this.data[key];
    //         }

    //         key(index: number): string | null {
    //           throw new Error('Method not implemented.');
    //         }

    //         removeItem(key: string): void {
    //           const { [key]: removedItem, ...others } = this.data;
    //           this.data = others;
    //         }

    //         setItem(key: string, value: string): void {
    //           this.data[key] = value;
    //         }
    //       }
    //     }
    //     throw Error('NOT IMPLEMENTED');
    //   },
    //   deps: [PLATFORM_ID]
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
