import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Ticket-Booking';
  @Input() username : string;

  constructor(){
    sessionStorage.clear();
  }

  onRouterOutletActivate(event : any){
    if(event.username!=null){
    this.username=sessionStorage.getItem("username");
    }
  }

}
