import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ForgotpasswordService } from 'src/app/forgotpassword/forgotpassword.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  securitycode: any;
  password: any ;

  constructor(private service: ForgotpasswordService,private router : Router) { }

  ngOnInit(): void {
  }
  clickHandler(){
    console.log( this.securitycode, this.password)

    // this.service.login(this.userid,this.password).subscribe(data => {console.log('success');this.router.navigate(['menu',this.userid]);}, err => {console.log(err);
    this.service.forgotpassword(this.securitycode,this.password).subscribe((data:any) => {console.log('success');this.router.navigateByUrl('signin');
   
  }, 
      (  err: any) => {console.log(err);
    alert("Wrong Security Code. Try again! ");

    }
    
    )}
    back(){
      this.router.navigate(['/sign-in']);

    }

}
