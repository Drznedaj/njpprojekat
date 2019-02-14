import { Component, HostListener } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instauauauau';

  constructor(private data: DataService) { }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   //console.log("scrolling");
  //   let pos = document.documentElement.scrollTop + window.outerHeight;//(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  //   // console.log('win scrolly ' + window.scrollY);
  //   // console.log('offsetHeight ' + wind);
  //   console.log(pos);
  //   let max = document.documentElement.scrollHeight;
  //   console.log(max);
  //   if (pos >= max) {
  //     console.log("got to bot");
  //     this.data.scrolledToBot(true);
  //   }
  // }
}
