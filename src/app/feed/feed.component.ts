import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() useri: User[];
  @Input() token: string;
  images: any[];
  isImageLoading: boolean;

  constructor(private imgser: ImageService) { }

  ngOnInit() {
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.images.push(reader.result);
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.imgser.getImage('url', this.token).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }

}
