import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlankHomePageComponent } from './blank-home-page/blank-home-page.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"\login",component:LoginComponent},
  {path:"\movies",canActivate :[AuthGuard] ,component:MoviesComponent},
  {path:"",component:BlankHomePageComponent},
  {path: 'movie/:name',canActivate :[AuthGuard] , component: MovieDetailsComponent},
  {path:"\bookingsummary",canActivate :[AuthGuard] ,component:BookingSummaryComponent},
  {path:"\checkout",canActivate :[AuthGuard] ,component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
