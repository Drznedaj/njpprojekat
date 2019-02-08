import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User } from "../user";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-login-button",
  templateUrl: "./login-button.component.html",
  styleUrls: ["./login-button.component.css"]
})
export class LoginButtonComponent implements OnInit {
  @Input() userToLogin: User;
  @Input() userToCheck: User;

  constructor(private loginService: LoginService, ) { }

  ngOnInit() {
  }

  onClick() {
    if (this.userToCheck) {
      console.log("loginujem");
      console.log(this.userToLogin);
      this.loginService.proveriUsera(this.userToCheck);
      this.loginService.loginujUsera(this.userToLogin);
    }
  }
}
