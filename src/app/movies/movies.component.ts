import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieList : any;
  dropDownData = ["Popularity","Name"];
  option : string;
  i : number;
  
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit() {
    let movies = this.http.get("assets/Movies/Movies.json");
    movies.subscribe(data =>
      {this.movieList=data;}
      )
  }
  book(i : number){
    this.router.navigate(['/movie',this.movieList[i].name]);
  }
}
