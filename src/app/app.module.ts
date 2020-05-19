import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './filter.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SelectedTheaterComponent } from './selected-theater/selected-theater.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlankHomePageComponent } from './blank-home-page/blank-home-page.component';
import { AuthGuard } from './auth.guard';
import { CurrentUserService } from './current-user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    NavbarComponent,
    FilterPipe,
    MovieDetailsComponent,
    SelectedTheaterComponent,
    BookingSummaryComponent,
    CheckoutComponent,
    BlankHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthGuard,CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
