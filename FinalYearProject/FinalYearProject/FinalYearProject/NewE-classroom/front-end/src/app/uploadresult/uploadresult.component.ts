import { Component, OnInit } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ResultService } from '../shared/result.service';

import { UploadresultService } from './uploadresult.service';
import { CurrentrouteService } from "../currentroute.service";
import { LoginteacherService } from "../user/loginteacher/loginteacher.service";

@Component({
  selector: 'app-uploadresult',
  templateUrl: './uploadresult.component.html',
  styleUrls: ['./uploadresult.component.css'],
  providers:[ResultService]
})
export class UploadresultComponent implements OnInit {

  // [x: string]: any;
  
    // showSucessMessage: boolean | undefined;
    // serverErrorMessages: string | undefined;
    name = '';
    dept = '';
    class_roll = '';
    sem = '';
    subject = '';
    scores = '';

  constructor(private up:UploadresultService,private router:Router ,private currentroute:CurrentrouteService,private logint:LoginteacherService) { }

  ngOnInit(): void {
    this.currentroute.setcurrentroute();
    if(this.logint.isStudent()){
      console.log("student");
    }
  }
  // onSubmit(form: NgForm) {
  //   console.log(form.value)
  //   this.resultService.postUser(form.value).subscribe
  //   (
  //     (       res: { token: string; }) => {
  //       this.showSucessMessage = true;
  //       setTimeout(() => this.showSucessMessage = false, 4000);
  //       this.resetForm(form);
  //       localStorage.setItem('token' , res.token)
  //     },
  //     (      err: { status: number; error: any[]; }) => {
  //       if (err.status === 422) {
  //         this.serverErrorMessages = err.error.join('<br/>');
  //       }
  //       else
  //         this.serverErrorMessages = 'Something went wrong.Please contact admin.';
  //     }
  //   );

  // }

  // resetForm(form: NgForm) {
  //   this.resultService.selectedResult = {
  //    name : '',
  //     dept : '',
  //     class_roll : '',
  //     sem : '',
  //     subject : '',
  //     scores :'', 
  //   };
  //   form.resetForm();
  //   this.serverErrorMessages = '';
  // }

  uploadHandler(){
    return this.up.upload(this.name,this.dept,this.class_roll,this.sem,this.subject,this.scores).subscribe(()=> 
    {console.log('result upload successful!'); 
    this.router.navigateByUrl('/teacher');},
     err =>{console.log(err)}
    )

  }

}
