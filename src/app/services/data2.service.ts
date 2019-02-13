import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  private messageSource = new BehaviorSubject({
    username: '',
    password: '',
    email: '',
    aktiviran: false,
    kojePrati: null,
    kojiGaPrate: null,
    slikeKorisnika: null
  });
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: User) {
    console.log("cange usr2");
    this.messageSource.next(message);
  }
}