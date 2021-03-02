import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ForgotpasswordteacherService } from 'src/app/forgotpasswordteacher/forgotpasswordteacher.service';
@Component({
  selector: 'app-forgotpasswordteacher',
  templateUrl: './forgotpasswordteacher.component.html',
  styleUrls: ['./forgotpasswordteacher.component.css']
})
export class ForgotpasswordteacherComponent implements OnInit {
  securitycode: any;
  password: any ;

  constructor(private service: ForgotpasswordteacherService,private router : Router) { }

  ngOnInit(): void {
  }
  clickHandler(){
    console.log( this.securitycode, this.password)

    // this.service.login(this.userid,this.password).subscribe(data => {console.log('success');this.router.navigate(['menu',this.userid]);}, err => {console.log(err);
    this.service.forgotpasswordteacher(this.securitycode,this.password).subscribe((data:any) => {console.log('success');this.router.navigateByUrl('signin');
   
  }, 
      (  err: any) => {console.log(err);
    alert("Wrong Security Code. Try again! ");

    }
    
    )}
    back(){
      this.router.navigate(['/teacher-sign-in']);

    }

}
