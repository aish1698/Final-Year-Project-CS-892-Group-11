import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { ApiService } from 'src/app/api.service';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CurrentrouteService } from '../currentroute.service';
import { LoginService } from '../user/login/login.service';
@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  sem: any;
  subject: any;

  constructor(private http:HttpClient,
    private service:ApiService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef,private currentroute:CurrentrouteService,private login:LoginService) { }

  ngOnInit(): void {
    this.currentroute.setcurrentroute();
   if(this.login.isStudent()){
     console.log("student");
   }
  }
  click(){

    var sem= document.forms["RegForm"]["sem"];
    var subject= document.forms["RegForm"]["subject"];

  if (sem.value == "")                                  
  { 
    console.log("virat kohli");
      window.alert("Semester field is empty."); 
      sem.focus(); 
      return false; 
  } 

  if (!(sem.value>=1 && sem.value<=8)   )                              
  { 
      window.alert("Please enter valid semester."); 
      sem.focus(); 
      return false; 
  } 

  if (subject.value == "")                                  
  { 
      window.alert("Subject field is empty."); 
      subject.focus(); 
     return false; 
  }
    // console.log(this.sem,this.subject);
    this.router.navigate(['/learningstudent',this.sem,this.subject]);
}
}
