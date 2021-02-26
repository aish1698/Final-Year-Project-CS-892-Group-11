import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
  [x: string]: any;

  constructor(private http: HttpClient,
              private _router: Router) {}
  forgotpassword(s: any,p: any)
  {
    return this.http.post(`http://localhost:3000/forgotpassword/forgotpasswordstudent`, {securitycode: s, password: p})
  }
}