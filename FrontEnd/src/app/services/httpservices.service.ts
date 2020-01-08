//import { Order } from './../model/order.interface';
import { Order } from '../models/order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class HttpservicesService {

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

    // Handle API errors
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };


  getMenu(id) {
    return this.http.get('http://localhost:8080/getMenu/' + id);
 }

 getTrips()
 {
   return this.http.get('http://localhost:8080/getTrip');
 }


 
 
 getStops(des)
 {
   
   return this.http.get('http://localhost:8080/stop/' + des);
 }


 getRestaurants(id)
 {
   return this.http.get('http://localhost:8080/res/' + id);
 }

 
 getResInfo(resid)
 {
  return this.http.get('http://localhost:8080/resinfo/' + resid); 
 }

//  postOrder(order)
//  {
//   return this.http.post('http://localhost:8080/order' + order);
//  }

   // post method
   postOrder(item): Observable<Order> {
    return this.http
      .post<Order>('http://localhost:8080/userOder', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
