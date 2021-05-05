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
   
     this.router.navigate(['/resultdown',this.sem,this.subject,this.dept,this.class_roll]);
    
    
  }
  
}



