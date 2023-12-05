import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, delay, debounce, debounceTime } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class FormService {
  public BASE_URL: string = "";

  public options: any = { headers: new HttpHeaders({ 'Content-Type': 'text/plain'}) };

  public userData: any = null;
  public loadPage: boolean = false;


  constructor(
    private http: HttpClient
  ) {
    if (environment.config) {
      this.BASE_URL = environment.config["defaultUrl"];

    }
  }

  getLaoderStatus() {
    return this.loadPage;
  };

  activateLoader(status: boolean) {
    setTimeout(() => {
      this.loadPage = status;
    }, 10)
    
  };

  getNow() {
    return this.http.get(this.BASE_URL + "WeatherForecast/GetNow", this.options)
      .pipe(
        catchError(this.handleError)
      )
  };


  //********************************************************************/
  // Error handle
  handleError(error:any) {
    let errorMessage = '';
    if (error.error) {
      // Get client-side error
      if (error.error.errors) {
        let objKeys = Object.keys(error.error.errors);
        objKeys.forEach(key => {
          if (error.error.errors[key].length && error.error.errors[key].length > 0) {
            for (let i = 0; i < error.error.errors[key].length; i++) {
              errorMessage += "- " + error.error.errors[key][i];
              errorMessage += "\n";
            }
          } else {
            errorMessage += error.error.errors[key];
          }
        })
      } else {
        errorMessage = error.error;
      }
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}

