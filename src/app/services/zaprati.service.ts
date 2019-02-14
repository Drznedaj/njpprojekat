import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZapratiService {

  constructor(private http: HttpClient) { }

  zaprati(ko: string, koga: string, token: string) {
    console.log(ko);
    let url = 'api/korisnik/zaprati';
    let updata = new FormData();
    updata.append('ko', ko, null);
    updata.append('koga', koga, null);
    this.http.post(url, updata, { params: { 'ko': ko, 'koga': koga }, headers: new HttpHeaders({ 'Authorization': token, 'Content-Type': 'application/json' }) }).subscribe(res => console.log(res));
  }
}
