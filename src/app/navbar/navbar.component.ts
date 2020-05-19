import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn : boolean;
  username : string;
  constructor(private router : Router,private currentUserService : CurrentUserService) { 
  }
  ngOnInit(): void {
    this.currentUserService.cast.subscribe(data => this.username=data);
  }

  login(){
    this.router.navigateByUrl("\login");
  }

  logout(){
    this.currentUserService.editUsername(""); 
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }

  goToHome(){
    this.router.navigateByUrl("");
  }

}
