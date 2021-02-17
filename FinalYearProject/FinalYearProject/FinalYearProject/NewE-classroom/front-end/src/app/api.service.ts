import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  login(u,p)
  {
    return this.http.post(`http://localhost:3000/User/login`, {userid: u, password: p})
  }
  
 
}
