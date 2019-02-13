import { Component, OnInit, Input } from '@angular/core';
import { Komentar } from '../komentar';
import { DataService } from '../services/data.service';
import { User } from '../user';
import { Data2Service } from '../services/data2.service';
import { Parametri } from 'src/parametri';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-slika',
  templateUrl: './slika.component.html',
  styleUrls: ['./slika.component.css']
})
export class SlikaComponent implements OnInit {

  @Input() slikz: any;
  togal: boolean;
  token: string;
  user: User;
  parametr: Parametri;
  koment: Komentar;

  constructor(private data: DataService, private data2: Data2Service, private komser: CommentService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(tk => this.token = tk);
    this.data2.currentMessage.subscribe(us => this.user = us);
  }

  toggle() {
    this.togal = !this.togal;
  }

  onClick() {
    this.koment.user = this.user.username;
    this.komser.addComment(this.koment, this.slikz.cija, this.slikz.pat, this.token);
  }

}
