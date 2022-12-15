import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import{AuthActivate} from './guards/auth.activate'



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule

  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers:[
    AuthActivate
  ]
})
export class SharedModule { }
