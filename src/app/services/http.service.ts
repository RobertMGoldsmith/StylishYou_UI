import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) { }
  
  readProducts() {
    // mimic http call to database
    return this.http.get('assets/ourProducts.json')
  }

  
}
