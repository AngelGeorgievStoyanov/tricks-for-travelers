import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as internal from 'stream';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  internal: any
  internalSec: any


  seconds: number
  constructor(private router: Router) {
    this.seconds = 5
    this.fetchNotFound()
  }


  fetchNotFound(): void {



    this.internalSec = setInterval(() => {
      this.seconds = this.seconds - 1
    }, 1000)

    this.internal = setTimeout(() => (
      this.router.navigate(['/home'])
    ), 5000)

  }



  goHome() {
    // clearTimeout(this.internal)

    clearInterval(this.internalSec)

    this.router.navigate(['/home'])
  }

}

