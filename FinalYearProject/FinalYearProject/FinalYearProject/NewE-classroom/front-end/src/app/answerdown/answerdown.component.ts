import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { ApiService } from 'src/app/api.service';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-answerdown',
  templateUrl: './answerdown.component.html',
  styleUrls: ['./answerdown.component.css']
})
export class AnswerdownComponent implements OnInit {

  sem: any;
  subject: any;

  constructor(private http:HttpClient,
    private service:ApiService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  click(){
    // console.log(this.sem,this.subject);
    this.router.navigate(['/answerdownload',this.sem,this.subject]);
}
}
