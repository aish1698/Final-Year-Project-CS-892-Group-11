import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from "@angular/router";
import { FormGroup,FormControl,Validator}  from "@angular/forms";

import { NgForm } from '@angular/forms';

import { CurrentrouteService } from '../currentroute.service';
import { LoginteacherService } from "../user/loginteacher/loginteacher.service";

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  sem:any;
  subject:any;
  userid:any;
  
  constructor(private service: ApiService,private router : Router ,private currentroute:CurrentrouteService,private logint:LoginteacherService) { }

  ngOnInit(): void {
    this.currentroute.setcurrentroute();
    if(this.logint.isStudent()){
      console.log("student");
    }
  
  }
  click()
  {

    this.router.navigate(['/list',this.sem,this.subject,this.userid]); 
  }
}
