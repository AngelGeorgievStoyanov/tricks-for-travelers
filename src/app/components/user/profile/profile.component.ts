import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from '../../shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent {

  email: string | undefined|null

  constructor(private userService: UserService) {
    this.email=this.userService.user?.email
    
    if(this.email===undefined){
      
      this.email=localStorage.getItem('email')!==null?localStorage.getItem('email'):undefined
    }

  }




}
