import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Komentar } from '../komentar';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseurl = 'api/korisnik/komentar/'
  constructor(private http: HttpClient) { }

  addComment(komentar: Komentar, usr: string, slik: string, token: string) {
    let url = this.baseurl + usr + '/' + slik;
    this.http.post(url, komentar, { headers: new HttpHeaders({ 'Authorization': token, 'Content-Type': 'application/json' }) })
  }
}
