import { Component, OnInit,ChangeDetectorRef,OnDestroy, ɵɵpureFunction1} from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { Subscription } from "rxjs";
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ChapterService} from "src/app/chapter/chapter.service"
import { Profile } from "src/app/models/profile";
import { CurrentrouteService } from '../currentroute.service';
import { LoginService } from '../user/login/login.service';
import { createPublicKey } from 'crypto';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements  OnInit {
  sem :any;
 subject:any;
 chapter:any;
 profiles: Profile[] = [];
  private profileSubscription: Subscription = new Subscription;
  ApiService: any;

  constructor(private http:HttpClient,
    private service: ChapterService,
     private route:ActivatedRoute,
     private router : Router,
     private ref: ChangeDetectorRef,private currentroute:CurrentrouteService,private login:LoginService) { }
  

  ngOnInit(): void {
    this.sem= this.route.snapshot.paramMap.get('sem');
    this.subject= this.route.snapshot.paramMap.get('subject');
    
    this.service.getProfiles(this.sem,this.subject)
    .subscribe((profiles: any) => {

          console.log(profiles);
           this.profiles = profiles;

      });
      this.currentroute.setcurrentroute();
   if(this.login.isStudent()){
     console.log("student");
  }

  }
  submit(chapter:any){
    alert(chapter);
    this.chapter=chapter;
    this.sem= this.route.snapshot.paramMap.get('sem');
    this.subject= this.route.snapshot.paramMap.get('subject');
    this.router.navigate(['/learningstudent',this.sem,this.subject,this.chapter]);


  }
}
