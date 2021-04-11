import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
