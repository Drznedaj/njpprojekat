import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Parametri } from 'src/parametri';

@Component({
  selector: 'app-comment-button',
  templateUrl: './comment-button.component.html',
  styleUrls: ['./comment-button.component.css']
})
export class CommentButtonComponent implements OnInit {

  @Input() parametri: Parametri;

  constructor(private comser: CommentService) { }

  ngOnInit() {
  }

  onClick() {
    this.comser.addComment(this.parametri.komentar, this.parametri.user, this.parametri.slika, this.parametri.token);
  }
}
