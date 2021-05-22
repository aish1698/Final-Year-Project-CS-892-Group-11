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
    var name= document.forms["RegForm"]["name"];
    var sem= document.forms["RegForm"]["sem"];
    var subject= document.forms["RegForm"]["subject"];
    var dept= document.forms["RegForm"]["department"];
    var class_roll= document.forms["RegForm"]["class_roll"];
    var scores= document.forms["RegForm"]["scores"];
   
    if (name.value == "")                                  
    { 
      //console.log("virat kohli");
        window.alert("Name field is empty."); 
        name.focus(); 
        return false; 
    } 

  if (sem.value == "")                                  
  { 
    //console.log("virat kohli");
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
      window.alert("Roll Number field is empty."); 
      class_roll.focus(); 
     return false; 
  }

  if (scores.value == "")                                  
  { 
      window.alert("Roll Number field is empty."); 
      scores.focus(); 
     return false; 
  }



    return this.up.upload(this.name,this.dept,this.class_roll,this.sem,this.subject,this.scores).subscribe(()=> 
    {console.log('result upload successful!'); 
    this.router.navigateByUrl('/teacher');},
     err =>{console.log(err)}
    )

  }

}
