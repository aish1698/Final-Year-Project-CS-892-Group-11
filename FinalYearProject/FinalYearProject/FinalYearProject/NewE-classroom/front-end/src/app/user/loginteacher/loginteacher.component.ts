import { Component, OnInit } from '@angular/core';
import { LoginteacherService } from 'src/app/user/loginteacher/loginteacher.service';
import { Router } from "@angular/router";
import { FormGroup,FormControl,Validator}  from "@angular/forms";

import { NgForm } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-loginteacher',
  templateUrl: './loginteacher.component.html',
  styleUrls: ['./loginteacher.component.css']
})
export class loginteacherComponent {

  title = 'registration';
  userid: any;
  password: any ;

  constructor(private service: LoginteacherService,private router : Router) { }

  
  clickHandler(){
    console.log( this.userid, this.password)

    // this.service.login(this.userid,this.password).subscribe(data => {console.log('success');this.router.navigate(['menu',this.userid]);}, err => {console.log(err);
    this.service.loginteacher(this.userid,this.password).subscribe((data:any) => {console.log('success');this.router.navigate(['teacher']);
    localStorage.setItem('token', data.token)
    localStorage.setItem('userid',this.userid)
    localStorage.setItem("student","F");
  }, 

  err => {console.log(err);
    alert("Wrong UserID or Password. Try again! ");

    }
    
    )}
    onPress(){
      this.router.navigate(['/forgotpasswordteacher']);
    }
    
}
