import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ImageService } from '../services/image.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Data2Service } from '../services/data2.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  @Input() token: string;

  profilna: any = {
    'im': null,
    'ime': ''
  };
  selectedFile: File;
  weOnProfile: boolean = false;

  constructor(private http: HttpClient, private imgser: ImageService, private san: DomSanitizer, private data: Data2Service) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(u => {
      console.log(u);
      this.user = u;
      let path;
      let ime;
      if (this.user.profilna) {
        path = this.user.profilna.path;
        ime = this.user.profilna.ime
      } else {
        path = '';
        ime = '';
      }

      let url = 'api/korisnik/slike/get/' + path;
      this.imgser.getImage(url, this.token).subscribe(data => {
        let unsafe = URL.createObjectURL(data);
        let imaa = this.san.bypassSecurityTrustResourceUrl(unsafe);
        this.profilna.im = imaa;
        this.profilna.ime = ime;
      });
    })
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

  goProfile() {
    this.weOnProfile = !this.weOnProfile;
  }

}
