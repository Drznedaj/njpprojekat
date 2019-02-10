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
    aktiviran: false
  });
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: User) {
    this.messageSource.next(message);
  }
}