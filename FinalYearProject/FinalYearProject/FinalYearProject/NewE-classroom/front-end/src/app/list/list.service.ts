import { Injectable } from '@angular/core';
import { map,catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile } from "src/app/models/profile";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ListService {
  private _deleteUrl ="http://localhost:3000/learning/profile/";
  private profiles: Profile[] = [];
    private profiles$ = new Subject<Profile[]>();
  
 

    constructor(private http: HttpClient,private router:Router) {}
  
    getProfiles(s :any,su: any,u:any) {
      return  this.http
        .post<any>("http://localhost:3000/learning/list",{sem:s,subject:su,userid:u})  
    }
  
    getProfilesStream() {
      return this.profiles$.asObservable();
    }
   

    deleteProfile(id: any){
      return this.http.delete("http://localhost:3000/learning/profile/"+id);

     
  }
  updateProfile(){
    
  }
}
