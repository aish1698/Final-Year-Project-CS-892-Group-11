import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CurrentrouteService } from '../currentroute.service';
import { LoginService } from '../user/login/login.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router,private currentroute:CurrentrouteService,private login:LoginService) { }

  ngOnInit(): void {
    this.currentroute.setcurrentroute();
    if(this.login.isStudent()){
      console.log("student");
    }

  }
  materialdHandler(){
    this.router.navigate(['/learning']);
  }
  answerHandler(){
    this.router.navigate(['/answer-upload']);
  }
  assignmentdownloadHandler(){
    this.router.navigate(['/assignmentdown']);
  }
  videocallHandler(){
    this.router.navigate(['/video-call']);
  }
}
