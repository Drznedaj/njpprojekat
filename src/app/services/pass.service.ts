import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class PassService {

  constructor(private http: HttpClient) { }

  changePass(token: string, user: User) {
    console.log('menjam pass');
    let url = 'api/korisnik/promeniPass/' + user.username;
    this.http.post(url, user, { headers: new HttpHeaders({ 'Authorization': token }) }).subscribe(res => console.log(res));
  }

  changeEma(token: string, user: User) {
    console.log('menjam ema');
    let url = 'api/korisnik/promeniEma/' + user.username;
    this.http.post(url, user, { headers: new HttpHeaders({ 'Authorization': token }) }).subscribe(res => console.log(res));
  }
}
