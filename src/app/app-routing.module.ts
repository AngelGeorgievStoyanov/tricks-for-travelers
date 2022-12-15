import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./components/trips/trips.module').then(m => m.TripsModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./components/comments/comments.module').then(m => m.CommentsModule)
  },
  {
    path: 'not-found',
    component:NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
