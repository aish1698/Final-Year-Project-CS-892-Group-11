import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import { Profile } from "src/app/models/profile";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AssignmentdownloadService {

    private profiles: Profile[] = [];
    private profiles$ = new Subject<Profile[]>();

    constructor(private http: HttpClient) {}
  
    getProfiles(s :any,su: any,c:any) {
      return  this.http
        .post<any>("http://localhost:3000/assignmentdown/assignmentdownload",{sem:s,subject:su,chapter:c})  
    }
  
    getProfilesStream() {
      return this.profiles$.asObservable();
    }   
  }

