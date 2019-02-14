import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  private messageSource2 = new BehaviorSubject(null);
  currentMessage2 = this.messageSource2.asObservable();

  scrolledToBot(message: boolean) {
    this.messageSource2.next(message);
  }
}
