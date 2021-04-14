import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from "@angular/router";
import { FormGroup,FormControl,Validator}  from "@angular/forms";

import { NgForm } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {

  title = 'registration';
  userid: any;
  password: any ;

  constructor(private service: ApiService,private router : Router) { }

  
  clickHandler(){
    console.log( this.userid, this.password)

    // this.service.login(this.userid,this.password).subscribe(data => {console.log('success');this.router.navigate(['menu',this.userid]);}, err => {console.log(err);
    this.service.login(this.userid,this.password).subscribe((data:any) => {console.log('success');this.router.navigate(['student']);
    localStorage.setItem('token', data.token)
    localStorage.setItem('userid',this.userid)
    localStorage.setItem("student","T");
  }, 
  err => {console.log(err);
    alert("Wrong UserID or Password. Try again! ");

    }
    
    )}
    onPress(){
      this.router.navigate(['/forgotpassword']);
    }
}
