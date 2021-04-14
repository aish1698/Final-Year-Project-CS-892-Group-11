import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from './user/login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor( private _LoginService: LoginService,
                private _router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
   
    if (this._LoginService.loggedIn() && this._LoginService.isStudent())  {
     
      return true
    } else {
      //console.log("hello");
      this._router.navigate(['/sign-in'])
      return false
    }
  }

}
