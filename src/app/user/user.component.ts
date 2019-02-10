import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() token: string;

  selectedFile: File;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    console.log('promenio se fajl');
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log('uploadujem');
    const upData = new FormData();
    //let ime = this.user.username + (new Date).toLocaleString();
    upData.append('file', this.selectedFile, this.selectedFile.name);

    //console.log(this.token);
    let url = 'api/korisnik/slike/stavi/' + this.user.username;
    this.http.post(url, upData, { headers: new HttpHeaders({ 'Authorization': this.token }) }).subscribe(res => console.log(res));
    // this.http.post(url, {}, { headers: new HttpHeaders({ 'Authorization': this.token }), params: new HttpParams(this.selectedFile) })
  }

}
