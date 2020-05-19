import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  amount : number;

  constructor(private route : Router){ }

  ngOnInit(): void {
    this.amount = Number(history.state.data.Summary.price) * Number(history.state.data.Summary.seats);
  }

  bookMore(){
    this.route.navigateByUrl("/movies");
  }

}
