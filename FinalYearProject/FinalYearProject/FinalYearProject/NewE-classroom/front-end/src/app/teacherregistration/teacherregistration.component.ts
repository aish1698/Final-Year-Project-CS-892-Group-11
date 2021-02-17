import { Component, OnInit } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';

import { teacherregistrationService } from 'src/app/teacherregistration/teacherragistration.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-teacherregistration',
  templateUrl: './teacherregistration.component.html',
  styleUrls: ['./teacherregistration.component.css'],
  providers : [teacherregistrationService]
})
export class teacherregistrationComponent implements OnInit {
  [x: string]: any;
  
  showSucessMessage: boolean;
  serverErrorMessages: string;
  fullName = '';
    userid = '';
    dept = '';
    reg_id= '';
    sem = '';
    subject = '';
    email = '';
    mobile = '';
    password = '';


  constructor(public service: teacherregistrationService ,private router : Router) {
  
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.userService.postUser(form.value).subscribe
    (
       res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        localStorage.setItem('token' , res.token)
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName : '',
      userid : '',
      dept : '',
      reg_id : '',
      sem : '',
      subject : '',
      email : '',
      mobile : '',
      password : '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
 
  registerHandler(){
    var fullName = document.forms["RegForm"]["fullName"];               
    var userid = document.forms["RegForm"]["userid"]; 
    var dept =   document.forms["RegForm"]["dept"];  
    var reg_id =   document.forms["RegForm"]["reg_id"]; 
    var sem =   document.forms["RegForm"]["sem"]; 
    var subject =   document.forms["RegForm"]["subject"]; 
    var email =  document.forms["RegForm"]["email"];  
    var mobile = document.forms["RegForm"]["mobile"];
    var password = document.forms["RegForm"]["password"];
    var ph= /^\d{10}$/;
    var e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fullName.value == "")                                  
    { 
        window.alert("Please enter your Full Name."); 
        fullName.focus(); 
        return false; 
    } 
   
    if (userid.value == "")                               
    { 
        window.alert("Please Enter UserID"); 
        userid.focus(); 
        return false; 
    } 
    if (dept.value == "")                               
    { 
        window.alert("Please Enter Department"); 
        dept.focus(); 
        return false; 
    } 
    if (reg_id.value == "")                               
    { 
        window.alert("Please Enter Registration id"); 
        reg_id.focus(); 
        return false; 
    } 
    if (sem.value == "")                               
    { 
        window.alert("Please Enter Sem"); 
        sem.focus(); 
        return false; 
    } 
    if (subject.value == "")                               
    { 
        window.alert("Please Enter Subject"); 
        subject.focus(); 
        return false; 
    }
    if (mobile.value == "")                                   
    { 
        window.alert("Please enter phone number."); 
        mobile.focus(); 
        return false; 
    } 

    if (!(mobile.value.match(ph) ))                                   
    { 
        window.alert("Please enter valid phone number."); 
        mobile.focus(); 
        return false; 
    } 
   
    if (email.value == "")                           
    { 
    
        window.alert("Please enter your EmailID."); 
        email.focus(); 
        return false; 
    }
    if (!(email.value.match(e)))
    {
      window.alert("Please Enter valid EmailID");
      email.focus();
      return false;
    }

   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
    
  return this.service.teacherregistration( this.fullName, this.userid,this.dept,this.reg_id,this.sem,this.subject,this.email,this.mobile,this.password ).subscribe(() => {console.log('sign up successful!'); this.router.navigateByUrl('/login');}, err =>{console.log(err)})
  
  };



}