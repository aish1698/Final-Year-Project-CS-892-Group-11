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
export class LearningstudentService {

  

  
    private profiles: Profile[] = [];
    private profiles$ = new Subject<Profile[]>();
   
  
    constructor(private http: HttpClient) {}
  
    getProfiles(s :any,su: any) {
      return  this.http
        .post<any>("http://localhost:3000/learning/learningstudent",{sem:s,subject:su})
        // .pipe(
        //   map((profileData) => {
        //     return profileData.profiles;
        //   })
        // )
        // .subscribe((profiles) => {
        //   console.log(profiles);
        //   this.profiles = profiles;
        //   this.profiles$.next(this.profiles);
        // });
    }
  
    getProfilesStream() {
      return this.profiles$.asObservable();
    }
      
  }

