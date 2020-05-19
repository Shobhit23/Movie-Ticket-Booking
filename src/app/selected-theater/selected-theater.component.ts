import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITheater } from 'src/assets/Theaters/Theater';
import { NgForm } from '@angular/forms';
import { BookingSummary } from 'src/assets/BookingSummary/BookingSummary';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-theater',
  templateUrl: './selected-theater.component.html',
  styleUrls: ['./selected-theater.component.css']
})
export class SelectedTheaterComponent implements OnInit {

  @Input() index :number;
  @Input() MovieName : string;
  @Input() price : number;
  theatersList : Observable<any>;
  theaters : ITheater[];
  myForm : NgForm;
  date : string;
  time : string;
  seats : string;
  noOfSeats = [2,3,4,5,6,7,8,9,10];
  bookingSummary : BookingSummary;
  constructor(private http : HttpClient, private route : Router) { }

  ngOnInit(): void {
    this.theatersList = this.http.get("assets/Theaters/Theatres.json");
    this.theatersList.subscribe(data => {this.theaters=data;});  
  }

  submit(){
    this.route.navigateByUrl("\bookingsummary",
    {state:
      {data:
        {
          "theaterName":this.theaters[this.index].name,
          "seats":this.seats,
          "MovieName": this.MovieName,
           "price":Number(this.seats)*Number(this.price),
          "ShowDate":this.date,
          "ShowTiming":this.time,
        }
      }
    }
    );
  }

}
