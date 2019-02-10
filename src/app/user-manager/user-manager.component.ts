import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../services/data.service';
import { Data2Service } from '../services/data2.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  user: User = {
    username: '',
    password: '',
    email: '',
    aktiviran: false
  };
  currentUser: User;
  currentToken: string;

  constructor(private data: DataService, private data2: Data2Service) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(token => this.currentToken = token);
    this.data2.currentMessage.subscribe(usr => this.user = usr);
  }
}
