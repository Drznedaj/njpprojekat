import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User } from "../user";
import { LoginService } from "../services/login.service";
import { DataService } from "../services/data.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-login-button",
  templateUrl: "./login-button.component.html",
  styleUrls: ["./login-button.component.css"]
})
export class LoginButtonComponent implements OnInit {
  @Input() userToLogin: User;
  x: string;
  loginUrl = "api/login";
  authToken: string;
  constructor(
    private loginService: LoginService,
    private data: DataService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => (this.authToken = msg));
  }

  onClick() {
    if (this.userToLogin) {
      console.log("loginujem");
      console.log(this.userToLogin);
      this.loginService
        .loginujUsera(this.userToLogin)
        .subscribe(user => this.data.changeMessage(user));

      // tslint:disable-next-line:max-line-length
      // this.http.post(this.loginUrl, this.userToLogin, {headers: new HttpHeaders({'Content-Type': 'application/json'}), observe: 'response'}).subscribe(res => this.authToken = res.headers.getAll('Authorization')[0]);
    }
  }
}
