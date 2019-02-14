import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(private http: HttpClient) { }

  getUsers(query: string, token: string): Observable<User[]> {
    let url = 'api/korisnik/nadjisve/' + query;
    return this.http.get<User[]>(url, { headers: new HttpHeaders({ 'Authorization': token }) });
  }
}
