import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, of, map, catchError, throwError, retryWhen, delay, take } from 'rxjs';

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
