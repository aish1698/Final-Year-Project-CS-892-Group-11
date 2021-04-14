import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  forgotpassword(securitycode: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  login( u: any, p: any)
  {
    return this.http.post(`http://localhost:3000/User/login`, {userid: u, password: p})
  }
  logint( u: any, p: any)
  {
    return this.http.post(`http://localhost:3000/User/loginteacher`, {userid: u, password: p})
  }

  assignmentdownload( s: any, su: any)
  {
    return this.http.post(`http://localhost:3000/assignmentdown/assignmentdownload`, {sem: s, subject: su})
  }
  answerdownload( s: any, su: any)
  {
    return this.http.post(`http://localhost:3000/answerdown/answerdownload`, {sem: s, subject: su})
  }
  learning( s: any, su: any)
  {
    return this.http.post(`http://localhost:3000/learning/learningstudent`, {sem: s, subject: su})
  }
  
}
