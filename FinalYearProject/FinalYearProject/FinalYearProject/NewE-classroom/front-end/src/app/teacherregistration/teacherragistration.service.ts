import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class teacherregistrationService {
  
  navigateByUrl(arg0: string): () => void {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }
 
  teacherregistration(f: string,u: string,d: string,r: string,s: string,t: string,e: string,m: string,p: string,se: string)
  {
    return this.http.post(`http://localhost:3000/User/teacherregister`, {fullName: f, userid: u,dept: d,reg_id : r,sem : s, subject : t, email:e, mobile:m, password: p,securitycode:se})
  }


  
}

