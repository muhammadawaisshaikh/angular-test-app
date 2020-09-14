import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  public message = new Subject<string>();

  constructor() { }

  setMessage(value) {
    this.message.next(value);
  }
}
