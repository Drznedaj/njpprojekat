import { Injectable } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { User } from "../user";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { DataService } from "./data.service";
import { Data2Service } from "./data2.service";
import { NgNoValidate } from "@angular/forms/src/directives/ng_no_validate_directive";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
  loginUrl = 'api/login';
  baseTraziUrl = 'api/korisnik/activate/1/';
  authToken: string;

  constructor(private http: HttpClient, private data: DataService, private data2: Data2Service) { }

  public loginujUsera(user: User) {
    // tslint:disable-next-line:max-line-length
    this.http
      .post(this.loginUrl, user, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response'
      })
      .subscribe(
        res => {
          this.data.changeMessage(res.headers.getAll('Authorization')[0]);
          console.log(res.headers.getAll('Authorization')[0]);
        });
  }

  public proveriUsera(user: User) {
    //console.log(user);
    let urlx = this.baseTraziUrl + user.username;
    this.http.get(urlx).subscribe(res => {
      let ux = (res as User);
      user.aktiviran = ux.aktiviran;
      user.kojePrati = ux.kojePrati;
      user.kojiGaPrate = ux.kojiGaPrate;
      user.slikeKorisnika = ux.slikeKorisnika;
      this.data2.changeMessage(user);
      console.log(ux);
    });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
