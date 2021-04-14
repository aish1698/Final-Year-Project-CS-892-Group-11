import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { ApiService } from 'src/app/api.service';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CurrentrouteService } from '../currentroute.service';
import { LoginService } from '../user/login/login.service';
@Component({
  selector: 'app-assignmentdown',
  templateUrl: './assignmentdown.component.html',
  styleUrls: ['./assignmentdown.component.css']
})
export class AssignmentdownComponent implements OnInit {

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
    // console.log(this.sem,this.subject);
    this.router.navigate(['/assignmentdownload',this.sem,this.subject]);
}
}
