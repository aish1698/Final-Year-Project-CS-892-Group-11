import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from "@angular/router";
import { FormGroup,FormControl,Validator}  from "@angular/forms";

import { NgForm } from '@angular/forms';

import { CurrentrouteService } from '../currentroute.service';
import { LoginService } from '../user/login/login.service';
@Component({
  selector: 'app-downloadresult',
  templateUrl: './downloadresult.component.html',
  styleUrls: ['./downloadresult.component.css']
})
export class DownloadresultComponent implements OnInit {
    sem:any;
    subject:any;
    dept:any;
    class_roll:any;


    constructor(private service: ApiService,private router : Router ,private currentroute:CurrentrouteService,private login:LoginService) { }

  ngOnInit(): void {
    this.currentroute.setcurrentroute();
    if(this.login.isStudent()){
      console.log("student");
    }
  }


  click()
  {
   
    var sem= document.forms["RegForm"]["sem"];
    var subject= document.forms["RegForm"]["subject"];
    var dept= document.forms["RegForm"]["dept"];
    var class_roll= document.forms["RegForm"]["class_roll"];
 
    if (sem.value == "")                                  
  { 
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
  if (dept.value == "")                                  
  { 
      window.alert("Department field is empty."); 
      dept.focus(); 
      return false; 
  } 
  if (class_roll.value == "")                                  
  { 
      window.alert("Class Roll field is empty."); 
      class_roll.focus(); 
      return false; 
  } 

     this.router.navigate(['/resultdown',this.sem,this.subject,this.dept,this.class_roll]);
    
    
  }
  
}



