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
 
  teacherregistration(f,u,d,r,s,t,e,m,p)
  {
    return this.http.post(`http://localhost:3000/User/teacherregister`, {fullName: f, userid: u,dept: d,reg_id : r,sem : s, subject : t, email:e, mobile:m, password: p})
  }


  
}

