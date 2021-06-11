import { Component, OnInit,ChangeDetectorRef,OnDestroy} from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute }  from "@angular/router";
import { Subscription } from "rxjs";
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{AssignmentdownloadService} from "src/app/assignmentdownload/assignmentdownload.service"
import { Profile } from "src/app/models/profile";
import { CurrentrouteService } from '../currentroute.service';
import { LoginService } from '../user/login/login.service';
@Component({
  selector: 'app-assignmentdownload',
  templateUrl: './assignmentdownload.component.html',
  styleUrls: ['./assignmentdownload.component.css']
})
export class AssignmentdownloadComponent implements OnInit,OnDestroy {
 sem :any;
 subject:any;
chapter :any;
 profiles: Profile[] = [];
  private profileSubscription: Subscription = new Subscription;
  ApiService: any;

  constructor(private http:HttpClient,
   private service: AssignmentdownloadService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef,private currentroute:CurrentrouteService,private login:LoginService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.sem= this.route.snapshot.paramMap.get('sem');
    this.subject= this.route.snapshot.paramMap.get('subject');
    this.chapter= this.route.snapshot.paramMap.get('chapter');

    this.service.getProfiles(this.sem,this.subject,this.chapter)
    .subscribe((profiles: any) => {

         // console.log(profiles);
           this.profiles = profiles;
alert("Double click on file icon to fetch source-file!");
      });
      this.currentroute.setcurrentroute();
      if(this.login.isStudent()){
        console.log("student");
      }

  }

  getExt(ep:any){
    var k=ep;
    var ext=ep;
    var e=ext.split('.').pop();
  var p=document.getElementById("filepath")as HTMLElement;
  p.remove();
  var x=document.getElementById("kk") as HTMLElement;
  if(e=='pdf'){
  let string=' <a  href="'+k+'" style="color: black"> <i  class="fa fa-file-pdf-o" style="font-size:48px;color:red; margin-right:5px;"></i></a>';
  x.innerHTML+=string;
  }
  else if(e=='mp4'){
    let string=' <a  href="'+k+'" style="color: black"><i class="fas fa-video  style="font-size:48px;color:blue; margin-right:5px;"></i></a>' ;
    x.innerHTML+=string;
  }
  else if(e=='png'){
    let s=' <a  href="'+k+'" style="color: black"><i class="far fa-file-image" style="font-size:48px;color:orange; margin-right:5px;"></i></a>';
    x.innerHTML+=s;
}
else if(e=='jpeg'||e=='jpg'){
  let s=' <a  href="'+k+'" style="color: black"><i class="fas fa-file-image" style="font-size:48px;color:green; margin-right:5px;"></i></a>';
  x.innerHTML+=s;
}
  else if(e=='zip'||e=='rar'){
    let s=' <a  href="'+k+'" style="color: black"><i class="far fa-file-archive" style="font-size:48px;color:#808080; margin-right:5px;"></i></a>';
    x.innerHTML+=s;
  }
  else if(e=='doc'||e=='docx'){
    let s=' <a  href="'+k+'" style="color: black"><i class="fas fa-file-word" style="font-size:48px;color:#000080; margin-right:5px;"></i></a>';
    x.innerHTML+=s;
  }
  else{
    let s=' <a  href="'+k+'" style="color: black"><i class="fas fa-file-alt" style="font-size:48px;color:#BEBEBE;margin-right:5px;"></i></a>';
    x.innerHTML+=s;
  }
  console.log(e);
    }

  }
