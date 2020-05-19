import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() emitUsername : EventEmitter<string> = new EventEmitter<string>();
  username : string;
  password : string;

  myForm : NgForm;
  loggedIn : boolean = true;


  users : any;

  constructor(private http : HttpClient,private router : Router, private currentUserService : CurrentUserService) {
    }

  ngOnInit(): void {
    let users = (this.http.get("/assets/Registrations/Registrations.json"));
    users.subscribe(data => {
      this.users=data;
    })
  }

  submit(){
    let iterator : number;
    for(iterator=0;iterator<this.users.length;iterator++){
      if(this.username==this.users[iterator].username && this.password==this.users[iterator].password){
        this.loggedIn = true;
        sessionStorage.setItem("username",this.username);
        this.currentUserService.editUsername(this.username);
        this.router.navigateByUrl("\movies");
      }
    }
    this.loggedIn=false;
  }

}
