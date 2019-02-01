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
  authToken: string;

  constructor(private http: HttpClient, private data: DataService) { }

  public loginujUsera(user: User): Observable<string> {
    // tslint:disable-next-line:max-line-length
    this.http
      .post(this.loginUrl, user, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response'
      })
      .subscribe(
        res => this.data.changeMessage(res.headers.getAll('Authorization')[0]));

    return Observable.create(function (observer) { observer.next(this.authToken); observer.complete(); });
    // return this.http.post(this.loginUrl, user, {headers: new HttpHeaders({'Content-Type': 'application/json'}), observe: 'response'})
    //   .pipe(catchError(this.handleError));
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
