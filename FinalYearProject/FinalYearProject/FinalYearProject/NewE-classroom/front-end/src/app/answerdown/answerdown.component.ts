import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { ApiService } from 'src/app/api.service';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CurrentrouteService } from '../currentroute.service';
import { LoginteacherService } from '../user/loginteacher/loginteacher.service';
@Component({
  selector: 'app-answerdown',
  templateUrl: './answerdown.component.html',
  styleUrls: ['./answerdown.component.css']
})
export class AnswerdownComponent implements OnInit {

  sem: any;
  subject: any;
  chapter:any;

  constructor(private http:HttpClient,
    private service:ApiService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef,private currentroute:CurrentrouteService,private logint:LoginteacherService) { }

  ngOnInit(): void {
    this.currentroute.setcurrentroute();
   if(this.logint.isStudent()){
     console.log("student");
   }
  }
  click(){
    var sem= document.forms["RegForm"]["sem"];
    var subject= document.forms["RegForm"]["subject"];
    var chapter= document.forms["RegForm"]["chapter"];
  if (sem.value == "")                                  
  { 
    //console.log("virat kohli");
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

  if (chapter.value == "")                                  
  { 
      window.alert("Chapter field is empty."); 
      chapter.focus(); 
     return false; 
  }
    // console.log(this.sem,this.subject);
    this.router.navigate(['/answerdownload',this.sem,this.subject,this.chapter]);
}
}
