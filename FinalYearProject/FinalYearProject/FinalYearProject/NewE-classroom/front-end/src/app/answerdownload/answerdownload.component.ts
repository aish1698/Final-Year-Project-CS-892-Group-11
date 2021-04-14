import { Component, OnInit,ChangeDetectorRef,OnDestroy} from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { Subscription } from "rxjs";
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Profile } from "src/app/models/profile";
import{AnswerdownloadService} from "src/app/answerdownload/answerdownload.service"
import { CurrentrouteService } from '../currentroute.service';
import { LoginteacherService } from '../user/loginteacher/loginteacher.service';
@Component({
  selector: 'app-answerdownload',
  templateUrl: './answerdownload.component.html',
  styleUrls: ['./answerdownload.component.css']
})
export class AnswerdownloadComponent implements OnInit,OnDestroy {
 sem :any;
 subject:any;
 profiles: Profile[] = [];
  private profileSubscription: Subscription = new Subscription;
  ApiService: any;

  constructor(private http:HttpClient,
   private service: AnswerdownloadService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef,private currentroute:CurrentrouteService,private logint:LoginteacherService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.sem= this.route.snapshot.paramMap.get('sem');
    this.subject= this.route.snapshot.paramMap.get('subject');
    this.service.getProfiles(this.sem,this.subject)
    .subscribe((profiles: any) => {
         
          console.log(profiles);
           this.profiles = profiles;
         
      });
      this.currentroute.setcurrentroute();
      if(this.logint.isStudent()){
        console.log("student");
      }
    
  }


     
    
  }


