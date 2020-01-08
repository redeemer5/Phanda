import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class HttpservicesService {

  constructor(private http: HttpClient) { }


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

}
