import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from './user/login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthTeacherGuard implements CanActivate {

  constructor( private _LoginService: LoginService,
    private _router: Router){}

   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._LoginService.loggedIn())  {
      return true
    } else {
      this._router.navigate(['/teacher-sign-in'])
      return false
    }
  }
  
}
