import { Component, OnInit } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';

import { UserService} from '../../shared/user.service';
import { RegisterService } from 'src/app/user/register/register.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [UserService]
})
export class registerComponent implements OnInit {
  [x: string]: any;
  
  showSucessMessage: boolean | undefined;
  serverErrorMessages: string | undefined;
  fullName = '';
    userid = '';
    dept = '';
    class_roll = '';
    sem = '';
    email = '';
    mobile = '';
    password = '';
    securitycode = '';

  constructor(public service: RegisterService ,private router : Router) {
  
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.userService.postUser(form.value).subscribe
    (
      (       res: { token: string; }) => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        localStorage.setItem('token' , res.token)
      },
      (      err: { status: number; error: any[]; }) => {
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
      class_roll : '',
      sem : '',
      email : '',
      mobile : '',
      password : '',
      securitycode : '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
 
  registerHandler(){
    var fullName = document.forms["RegForm"]["fullName"];               
    var userid = document.forms["RegForm"]["userid"]; 
    var dept =   document.forms["RegForm"]["dept"];  
    var class_roll =   document.forms["RegForm"]["class_roll"]; 
    var sem =   document.forms["RegForm"]["sem"]; 
    var email =  document.forms["RegForm"]["email"];  
    var mobile = document.forms["RegForm"]["mobile"];
    var password = document.forms["RegForm"]["password"];
    var securitycode = document.forms["RegForm"]["securitycode"];
    var ph= /^\d{10}$/;
    var e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    

    
    if (fullName.value == "")                                  
    { 
        window.alert("Please enter your Full Name."); 
        fullName.focus(); 
        return false; 
    } 
   
    // if (userid.value == "")                               
    // { 
    //     window.alert("Please Enter UserID"); 
    //     userid.focus(); 
    //     return false; 
    // } 
    if (!(userid.value.match("^[0-9]{2}/[0-9]{3}$") ))                                   
    { 
        window.alert("Please enter valid UserID."); 
        mobile.focus(); 
        return false; 
    } 
    if (dept.value == "")                               
    { 
        window.alert("Please Enter Department"); 
        dept.focus(); 
        return false; 
    } 
    if (class_roll.value == "")                               
    { 
        window.alert("Please Enter Class Roll"); 
        class_roll.focus(); 
        return false; 
    } 
    
    // if (!(isNaN(class_roll.value) )    )                             
    // { 
    //     window.alert("Enter valid input for class roll number."); 
    //     class_roll.focus(); 
    //     return false; 
    // } 
    if (sem.value == "")                                  
    { 
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

   
    // if (password.value == "")                        
    // { 
    //     window.alert("Please enter your password"); 
    //     password.focus(); 
    //     return false; 
    // } 

    if (! (password.value.match("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}"))   )                     
    { 
        window.alert("Your password must contain min 8 letters, with at least a special character,at least one upper and one lower case and a number."); 
        password.focus(); 
        return false; 
    } 

    if (!(securitycode.value.match("^[0-9]{4}")))
    {
      window.alert("Security Code should be a FOUR digit number only.");
      securitycode.focus();
      return false;
    }

    
  return this.service.register( this.fullName, this.userid,this.dept,this.class_roll,this.sem,this.email,this.mobile, this.password ,this.securitycode)
  .subscribe(() => {console.log('sign up successful!'); this.router.navigateByUrl('/home');}, err =>{console.log(err)})
  
  };



}