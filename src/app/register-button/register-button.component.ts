import { Component, OnInit, Input } from '@angular/core';
import { RegisterServiceService} from '../services/register-service.service';
import { User } from '../user';

@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css']
})
export class RegisterButtonComponent implements OnInit {

  @Input() userToRegister: User;

  constructor(private registerService: RegisterServiceService) { }

  ngOnInit() {
  }
  onClick() {

    if (this.userToRegister) {
      console.log('registrujem se');
      console.log(this.userToRegister);
      this.registerService.registrujUsera(this.userToRegister).subscribe(user => this.userToRegister);
    }
  }
}
