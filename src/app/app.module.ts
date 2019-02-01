import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReceptComponent } from './recept/recept.component';
import { ProizvodComponent } from './proizvod/proizvod.component';
import { RegisterButtonComponent } from './register-button/register-button.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserComponent } from './user/user.component';
import { RegisterServiceService } from './services/register-service.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    ReceptComponent,
    ProizvodComponent,
    RegisterButtonComponent,
    LoginButtonComponent,
    UserManagerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegisterServiceService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
