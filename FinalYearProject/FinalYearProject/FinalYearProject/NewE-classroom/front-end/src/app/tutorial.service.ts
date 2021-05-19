import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import { Tutorial } from "src/app/models/tutorial.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import {Observable} from "rxjs";


const baseUrl = 'http://localhost:3000/api/tutorials';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) {}

  

  
  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
}
delete(id: any): Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
}
deleteAll(): Observable<any> {
  return this.http.delete(baseUrl);
}



}
