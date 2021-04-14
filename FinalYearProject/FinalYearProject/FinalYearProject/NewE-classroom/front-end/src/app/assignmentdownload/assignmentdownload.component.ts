import { Component, OnInit,ChangeDetectorRef,OnDestroy} from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { Subscription } from "rxjs";
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{AssignmentdownloadService} from "src/app/assignmentdownload/assignmentdownload.service"
import { Profile } from "src/app/models/profile";
import { CurrentrouteService } from '../currentroute.service';
import { LoginService } from '../user/login/login.service';
@Component({
  selector: 'app-assignmentdownload',
  templateUrl: './assignmentdownload.component.html',
  styleUrls: ['./assignmentdownload.component.css']
})
export class AssignmentdownloadComponent implements OnInit,OnDestroy {
 sem :any;
 subject:any;
 profiles: Profile[] = [];
  private profileSubscription: Subscription = new Subscription;
  ApiService: any;

  constructor(private http:HttpClient,
   private service: AssignmentdownloadService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef,private currentroute:CurrentrouteService,private login:LoginService) { }
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
      if(this.login.isStudent()){
        console.log("student");
      }
    
  }

     
    
  }


