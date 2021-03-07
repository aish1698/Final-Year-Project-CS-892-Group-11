import { Component, OnInit,ChangeDetectorRef,OnDestroy} from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { Subscription } from "rxjs";
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{LearningstudentService} from "src/app/learningstudent/learningstudent.service"
import { Profile } from "src/app/models/profile";
@Component({
  selector: 'app-learningstudent',
  templateUrl: './learningstudent.component.html',
  styleUrls: ['./learningstudent.component.css']
})
export class LearningstudentComponent implements OnInit,OnDestroy {
 sem :any;
 subject:any;
 profiles: Profile[] = [];
  private profileSubscription: Subscription = new Subscription;
  ApiService: any;

  constructor(private http:HttpClient,
   private service: LearningstudentService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.sem= this.route.snapshot.paramMap.get('sem');
    this.subject= this.route.snapshot.paramMap.get('subject');
    this.service.getProfiles(this.sem,this.subject)
    .subscribe((profiles: any) => {
          console.log("hello")
          console.log(profiles);
           this.profiles = profiles;
         
      });
    // this.profileSubscription = this.service
    //   .getProfiles()
    //   .subscribe((profiles: any) => {
    //     console.log("hello")
    //     console.log(profiles);
    //     this.profiles = profiles;
       
    //   });
  }

     
    
  }


