import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  constructor(private http: HttpClient) { }


  getMenu() {
    return this.http.get('http://localhost:8081/getMenu');
 }
}
