import { Component, OnInit,ChangeDetectorRef,OnDestroy,EventEmitter} from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { Subscription } from "rxjs";
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Profile } from "src/app/models/profile";
import { CurrentrouteService } from '../currentroute.service';
import { LoginteacherService } from "../user/loginteacher/loginteacher.service";
import { ListService } from './list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  
  id:any;
  sem :any;
 subject:any;
 userid:any;
 name:any;
 profiles: any;
 private profileSubscription: Subscription = new Subscription;
  ApiService: any;  
  data:any;

  constructor(
    private http:HttpClient,
    private service:ListService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef,
    private currentroute:CurrentrouteService, private logint:LoginteacherService,
    private toastr: ToastrService) { }
    ngOnDestroy(): void {
      throw new Error('Method not implemented.');
    }

  ngOnInit(): void {
    this.sem= this.route.snapshot.paramMap.get('sem');
    this.subject= this.route.snapshot.paramMap.get('subject');
    this.userid= localStorage.getItem('userid');
  
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
  deleteProfiles(id: any){
    alert("Do you really want to delete this material?");
    this.service.deleteProfile(id).subscribe(res=>{
     this.data=res;
     this.toastr.error('',JSON.stringify(this.data.message),
     {
       timeOut:2000,
       progressBar:true,
     });
     
    });
    }
  updation(){

  }

}
