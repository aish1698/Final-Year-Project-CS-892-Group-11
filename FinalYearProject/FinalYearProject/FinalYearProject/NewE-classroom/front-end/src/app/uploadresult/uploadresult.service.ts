import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadresultService {

  navigateByUrl(arg0: string): () => void {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }
 
  upload(n: string,d: string,c: string,s: string,su: string,sc: string)
  {
    return this.http.post(`http://localhost:3000/result/resultupload`, {name: n, dept: d,class_roll: c,sem : s,subject : su,scores:sc})
  }
}
