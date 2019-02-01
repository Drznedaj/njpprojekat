import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  };
  currentUser: User;
  currentToken: string;
  preTokenCrap: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(token => this.currentToken = token);
  }
}
