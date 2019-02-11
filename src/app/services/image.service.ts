import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImage(imageUrl: string, token: string): Observable<Blob> {
    return this.http
      .get(imageUrl, { responseType: 'blob', headers: new HttpHeaders({ 'Authorization': token }) });
  }
}
