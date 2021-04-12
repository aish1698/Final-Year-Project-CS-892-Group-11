import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from './user/login/login.service';
import {LoginTeacherService} from './user/login/login-teacher.service';


@Injectable({
  providedIn: 'root'
})
export class AuthHomeGuard implements CanActivate {

 constructor( private _LoginService: LoginService,private _LogintService:LoginTeacherService,
                private _router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this._LoginService.loggedIn() || !this._LogintService.loggedInt() )  {
      return true
    } else {
      this._router.navigate(['/contact'])
       return false
       
    }
  }
  
}
