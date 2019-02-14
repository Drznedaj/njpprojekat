import { Component, OnInit, Input } from '@angular/core';
import { GetusersService } from '../services/getusers.service';
import { User } from '../user';
import { ZapratiService } from '../services/zaprati.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() token: string;
  @Input() user: User;
  query: string;
  lista: User[] = [];

  constructor(private getusr: GetusersService, private zap: ZapratiService) { }

  ngOnInit() {
  }

  onClick() {
    this.getusr.getUsers(this.query, this.token).subscribe(res => this.lista = res);
  }

  onFollow(l: User) {
    this.zap.zaprati(this.user.username, l.username, this.token);
  }
}
