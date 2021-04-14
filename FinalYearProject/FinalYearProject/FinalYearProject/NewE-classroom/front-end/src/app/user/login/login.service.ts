import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;

  constructor(private http: HttpClient,
              private _router: Router) {}
  login(u: any,p: any)
  {
    return this.http.post(`http://localhost:3000/User/login`, {userid: u, password: p})
  }

  loggedIn() {
    console.log(!!localStorage.getItem('token'))
    return !!localStorage.getItem('token')
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  isStudent(){
    return localStorage.getItem("student")=="T"
  }

  


}
