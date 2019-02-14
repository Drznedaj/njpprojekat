import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../user';
import { PassService } from '../services/pass.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  selectedFile: File;
  @Input() user: User;
  @Input() token: string;
  tempUser: User = new User();

  constructor(private http: HttpClient, private pass: PassService) { }

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
    let url = 'api/korisnik/slike/profilna/' + this.user.username;
    this.http.post(url, upData, { headers: new HttpHeaders({ 'Authorization': this.token }) }).subscribe(res => console.log(res));
    // this.http.post(url, {}, { headers: new HttpHeaders({ 'Authorization': this.token }), params: new HttpParams(this.selectedFile) })
  }

  onPass() {
    this.user.password = this.tempUser.password;
    this.pass.changePass(this.token, this.user);
  }

  onEma() {
    this.user.email = this.tempUser.email;
    this.pass.changeEma(this.token, this.user);
  }

}
