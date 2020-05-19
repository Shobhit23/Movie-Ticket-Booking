import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  public username = new BehaviorSubject<string>("");
  cast = this.username.asObservable();

   editUsername(username : string){
     this.username.next(username);
   }

}
