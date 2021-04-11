import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { Profiles } from "src/app/models/profiles";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnswerUploadService {

  private profiles: Profiles[] = [];
  private profiles$ = new Subject<Profiles[]>();
  readonly url = "http://localhost:3000/api/answers/answer";

  constructor(private http: HttpClient) {}
  getProfiles() {
    this.http
      .get<{ profiles: Profiles[] }>(this.url)
      .pipe(
        map((profileData) => {
          return profileData.profiles;
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profiles$.next(this.profiles);
      });
  }

  getProfilesStream() {
    return this.profiles$.asObservable();
  }

  addProfile(sem: string, subject:string, name: string, image: File): void {
    const profileData = new FormData();
    profileData.append("sem", sem);
    profileData.append("subject", subject);
    profileData.append("name", name);
    profileData.append("image", image, name);
    this.http
      .post<{ profile: Profiles }>(this.url, profileData)
      .subscribe((profileData) => {
        console.log(profileData)
        const profile: Profiles = {
          _id: profileData.profile._id,
          sem: sem,
          subject: subject,
          name: name,
          imagePath: profileData.profile.imagePath,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      },
      err=>{console.log(err)}
      
      );
  }

}
