import { Component, OnInit,ChangeDetectorRef,OnDestroy} from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { Subscription } from "rxjs";
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Profile } from "src/app/models/profile";
import { CurrentrouteService } from '../currentroute.service';
import { LoginteacherService } from "../user/loginteacher/loginteacher.service";
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  sem :any;
 subject:any;
 userid:any;
 name:any;
 profiles: Profile[] = [];
  private profileSubscription: Subscription = new Subscription;
  ApiService: any;  


  constructor(
    private http:HttpClient,
    private service:ListService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef,
    private currentroute:CurrentrouteService, private logint:LoginteacherService) { }
    ngOnDestroy(): void {
      throw new Error('Method not implemented.');
    }

  ngOnInit(): void {
    
    this.sem= this.route.snapshot.paramMap.get('sem');
    this.subject= this.route.snapshot.paramMap.get('subject');
    this.userid= localStorage.getItem('userid');
    this.name= this.route.snapshot.paramMap.get('name');
    this.service.getProfiles(this.sem,this.subject,this.userid)
    .subscribe((profiles: any) => {
         
          console.log(profiles);
           this.profiles = profiles;
         
      });
    this.currentroute.setcurrentroute();
    if(this.logint.isStudent()){
      console.log("student");
    }
  }
  del(){
    


    




  }
  updation(){

  }

}
