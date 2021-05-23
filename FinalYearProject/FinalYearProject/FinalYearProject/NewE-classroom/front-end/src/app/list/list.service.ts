import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import { Profile } from "src/app/models/profile";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { setMaxListeners } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private profiles: Profile[] = [];
    private profiles$ = new Subject<Profile[]>();


    constructor(private http: HttpClient) {}
  
    getProfiles(s :any,su: any,u:any) {
      return  this.http
        .post<any>("http://localhost:3000/learning/list",{sem:s,subject:su,userid:u})  
    }
  
    getProfilesStream() {
      return this.profiles$.asObservable();
    }   
    delete(){
     
    }
}
