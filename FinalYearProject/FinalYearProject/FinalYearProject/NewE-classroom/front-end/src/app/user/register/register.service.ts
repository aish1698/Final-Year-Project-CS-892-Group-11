import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  navigateByUrl(arg0: string): () => void {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }
 
  register(f: string,u: string,d: string,c: string,s: string,e: string,m: string,p: string,se :string)
  {
    return this.http.post(`http://localhost:3000/User/register`, {fullName: f, userid: u,dept: d,class_roll : c,sem : s,email:e, mobile:m, password: p,securitycode:se})
  }


  
}
