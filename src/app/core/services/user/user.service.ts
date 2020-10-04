import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new ReplaySubject<User>(1);
  
  constructor() { }
    
  setUser(user) {
    this.user.next(user);
    console.log("State in Service > ", user);
    
  }

  getUser() {
    return this.user.asObservable();
  }
  
}
