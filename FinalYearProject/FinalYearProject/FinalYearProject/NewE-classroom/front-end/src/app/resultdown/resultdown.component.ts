import { Component, OnInit,ChangeDetectorRef,OnDestroy} from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { Subscription } from "rxjs";
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ResultdownService} from "src/app/resultdown/resultdown.service"

import { CurrentrouteService } from '../currentroute.service';
import { LoginService } from '../user/login/login.service';
import { Results } from "src/app/models/results";
@Component({
  selector: 'app-resultdown',
  templateUrl: './resultdown.component.html',
  styleUrls: ['./resultdown.component.css']
})
export class ResultdownComponent implements OnInit {
   result:any;
  sem :any;
 subject:any;
 dept:any;
 class_roll:any;





  constructor(private http:HttpClient,
    private service: ResultdownService,
     private route:ActivatedRoute,
     private router: Router,
     private ref: ChangeDetectorRef,private currentroute:CurrentrouteService,private login:LoginService) { }

   

    list :Results[]=[];

  ngOnInit(): void {
    this.sem= this.route.snapshot.paramMap.get('sem');
    this.subject= this.route.snapshot.paramMap.get('subject');
    this.dept= this.route.snapshot.paramMap.get('dept');
    this.class_roll= this.route.snapshot.paramMap.get('class_roll');

   
    this.service.ResultData(this.sem,this.subject,this.dept,this.class_roll)
    .subscribe((list:any)=>
    {
      console.log(list);
      this.list=list;

    });

    this.currentroute.setcurrentroute();
      if(this.login.isStudent()){
        console.log("student");
      }

  
  }
 

}
