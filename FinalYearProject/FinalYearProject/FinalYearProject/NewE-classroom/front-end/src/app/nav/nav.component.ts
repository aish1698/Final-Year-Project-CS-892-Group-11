import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";

import { UserService } from '../shared/user.service';
import {LoginService} from '../user/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth: LoginService,private router: Router) { }
  ngOnInit(): void {
  }
  loggedIn() {
    return this.auth.loggedIn();
  }
  onLogout(){
    this.auth.deleteToken();
    this.router.navigate(['/home']);
  }
  
}
