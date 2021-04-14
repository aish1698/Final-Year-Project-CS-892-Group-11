import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CurrentrouteService } from '../currentroute.service';
import { LoginteacherService } from '../user/loginteacher/loginteacher.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  constructor(private router: Router,private currentroute:CurrentrouteService,private logint:LoginteacherService) { }

  ngOnInit(): void {
    this.currentroute.setcurrentroute();
    if(this.logint.isStudent()){
      console.log("student");
    }


  }
  materialuHandler(){
    this.router.navigate(['/teaching']);
  }
  materialHandler(){
    this.router.navigate(['/assignment-upload']);
  }
  answerdownHandler(){
    this.router.navigate(['/answerdown']);
  }
  videocallHandler(){
    this.router.navigate(['/video-call']);
  }

}
