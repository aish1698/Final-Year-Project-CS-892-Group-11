import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'registration';
  userid= '';
  password= '';
  constructor(private service: ApiService) { }

  clickHandler(){
    console.log( this.userid, this.password)
    this.service.login(this.userid,this.password).subscribe(data => {console.log('success')}, err => {console.log(err)})
  }
}
