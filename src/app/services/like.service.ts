import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  like(token: string, slika: string): Observable<any> {
    let url = 'api/sli/lajkuj/' + slika;
    return this.http.post(url, {}, { headers: new HttpHeaders({ 'Authorization': token }) });
  }

  dislike(token: string, slika: string): Observable<any> {
    let url = 'api/sli/unlajkuj/' + slika;
    return this.http.post(url, {}, { headers: new HttpHeaders({ 'Authorization': token }) });
  }
}
