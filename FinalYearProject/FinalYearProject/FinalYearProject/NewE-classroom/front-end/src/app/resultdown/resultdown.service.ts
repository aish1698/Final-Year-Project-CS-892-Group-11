import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient ,HttpParams} from "@angular/common/http";
import { Router } from '@angular/router';

import { Results } from "src/app/models/results";

@Injectable({
  providedIn: 'root'
})
export class ResultdownService {

 
  constructor(private http: HttpClient) {}

  ResultData(s :any,su: any,d:any,c:any){
    
    
    return  this.http.post<any>("http://localhost:3000/result/resultdownload",{sem:s,subject:su,dept:d,class_roll:c})
  }

  
}
