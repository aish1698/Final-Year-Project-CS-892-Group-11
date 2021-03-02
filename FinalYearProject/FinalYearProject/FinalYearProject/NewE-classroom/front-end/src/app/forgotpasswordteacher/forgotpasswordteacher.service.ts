import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordteacherService {
  [x: string]: any;

  constructor(private http: HttpClient,
              private _router: Router) {}
  forgotpasswordteacher(s: any,p: any)
  {
    return this.http.post(`http://localhost:3000/forgotpassword/forgotpasswordteacher`, {securitycode: s, password: p})
  }
}