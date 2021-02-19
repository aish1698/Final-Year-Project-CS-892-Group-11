import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {LoginService} from '../user/login/login.service';
@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component implements OnInit {

  constructor(private auth: LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  loggedIn() {
    return this.auth.loggedIn();
  }
}
