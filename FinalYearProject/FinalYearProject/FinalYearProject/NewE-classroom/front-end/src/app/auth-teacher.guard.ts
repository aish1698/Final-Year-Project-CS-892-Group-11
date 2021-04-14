import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {LoginTeacherService} from './user/login/login-teacher.service';


@Injectable({
  providedIn: 'root'
})
export class AuthTeacherGuard implements CanActivate {

  constructor( private _LogintService: LoginTeacherService,
    private _router: Router){}

   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._LogintService.loggedInt()  && this._LogintService.isStudent())  {
      return true
    } else {
      this._router.navigate(['/teacher-sign-in'])
      return false
    }
  }
  
}
