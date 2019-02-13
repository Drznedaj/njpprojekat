import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { User } from '../user';
import { ImageService } from '../services/image.service';
import { sanitizeUrl } from '@angular/core/src/sanitization/sanitization';
import { _sanitizeUrl } from '@angular/core/src/sanitization/url_sanitizer';
import { DomSanitizer } from '@angular/platform-browser';
import { analyzeAndValidateNgModules, UrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() useri: User[];
  @Input() token: string;
  images: any[] = [];
  imaa: any;
  isImageLoading: boolean;
  numImages: 10;
  bla: any;

  constructor(private imgser: ImageService, private san: DomSanitizer) { }

  ngOnInit() {
    this.getImageFromService();
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.bla = reader.result;
      this.images.push(this.san.bypassSecurityTrustResourceUrl(this.bla));
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    // console.log(this.useri[0].slikeKorisnika.length);
    for (let i = 0; i < this.useri.length; i++) {
      for (let j = 0; j < this.useri[i].slikeKorisnika.length; j++) {
        let path = this.useri[i].slikeKorisnika[j].path;
        let ime = this.useri[i].slikeKorisnika[j].ime;
        let komen = this.useri[i].slikeKorisnika[j].komentars;
        let url = 'api/korisnik/slike/get/' + path;
        this.isImageLoading = true;
        this.imgser.getImage(url, this.token).subscribe(data => {
          // this.createImageFromBlob(data);
          // console.log(data);
          let unsafe = URL.createObjectURL(data);
          this.imaa = this.san.bypassSecurityTrustResourceUrl(unsafe);
          this.images.push({
            'im': this.imaa,
            'ime': ime,
            'komentari': komen,
            'cija': this.useri[i].username,
            'pat': path
          });
          this.isImageLoading = false;
        }, error => {
          this.isImageLoading = false;
          console.log(error);
        });
      }
    }
    // let path = this.useri[0].slikeKorisnika[0].path;
    // //console.log(path);
    // let url = 'api/korisnik/slike/get/' + path;
    // this.isImageLoading = true;
    // this.imgser.getImage(url, this.token).subscribe(data => {
    //   //this.createImageFromBlob(data);
    //   //console.log(data);
    //   let unsafe = URL.createObjectURL(data);
    //   this.imaa = this.san.bypassSecurityTrustResourceUrl(unsafe);
    //   this.images.push(this.imaa);
    //   this.isImageLoading = false;
    // }, error => {
    //   this.isImageLoading = false;
    //   console.log(error);
    // });
    // this.imgser.getImage(url, this.token).subscribe(res => {
    //   console.log(res);
    // });
  }

}
