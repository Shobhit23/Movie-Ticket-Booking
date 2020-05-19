import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../movies/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieList : any;
  movie : any;
  price : number;
  i : number;
  in : number;
  movieName : string;
  theatreList : any;
  selected : boolean;
  @Input() username : string;

  constructor(private http : HttpClient,private route : ActivatedRoute) {
    localStorage.getItem("username");
   }

  ngOnInit(): void {
    this.movieName = this.route.snapshot.paramMap.get("name");
    let movies = this.http.get("assets/Movies/Movies.json");
    movies.subscribe(data => {
    this.movieList=data;
    for(this.i=0;this.i<this.movieList.length;this.i++){
      if(this.movieList[this.i].name==this.movieName){
        this.movie=this.movieList[this.i];
        break;
      }
    }  


  });
  let theatres = this.http.get("assets/Theaters/Theatres.json");
    theatres.subscribe(data => {this.theatreList=data;this.price=(data[this.i].price)});
}

  select(inLocal : number){
    this.in = inLocal;
    this.selected=true;
  }

}
