import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import { Profile } from "src/app/models/profile";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { setMaxListeners } from 'process';
import { AnyARecord } from 'dns';
@Injectable({
  providedIn: 'root'
})
export class Downloadvideolec2Service {

    private profiles: Profile[] = [];
    private profiles$ = new Subject<Profile[]>();

    constructor(private http: HttpClient) {}
  
    getProfiles(s :any,su: any,c:any) {
      return  this.http
        .post<any>("http://localhost:3000/downloadvideolec/downloadvideolec2",{sem:s,subject:su,chapter:c})  
    }
  
    getProfilesStream() {
      return this.profiles$.asObservable();
    }   
  }

