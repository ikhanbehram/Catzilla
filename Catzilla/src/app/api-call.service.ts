import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private http: HttpClient, private router: Router) {}

  getCatPic() {
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }
}
