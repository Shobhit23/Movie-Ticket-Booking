import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingSummary } from 'src/assets/BookingSummary/BookingSummary';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {

MovieName: string;
ShowDate: string;
ShowTiming: string;
price: number;
seats: string;
theaterName: string;

bookingSummary : BookingSummary = new BookingSummary("",null,"","","","");


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.bookingSummary.MovieName=history.state.data.MovieName;
    this.bookingSummary.ShowDate=history.state.data.ShowDate;
    this.bookingSummary.ShowTiming=history.state.data.ShowTiming;
    this.bookingSummary.price=history.state.data.price;
    this.bookingSummary.seats=history.state.data.seats;
    this.bookingSummary.theaterName=history.state.data.theaterName;
  }

  modify(){
    this.router.navigateByUrl("/movies");
  }

  checkout(){
    this.router.navigateByUrl("/checkout",{state:{data:{"Summary":this.bookingSummary}}});
  }

}
