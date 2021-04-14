import { Injectable } from '@angular/core';
import { CanActivate, Router,Event, RouterStateSnapshot, ActivatedRouteSnapshot,NavigationEnd } from '@angular/router';
import { LoginService } from './user/login/login.service';
import {LoginTeacherService} from './user/login/login-teacher.service';
import { CurrentrouteService } from './currentroute.service';


@Injectable({
  providedIn: 'root'
})
export class AuthHomeGuard implements CanActivate {

 constructor( private _LoginService: LoginService,private _LogintService:LoginTeacherService,
                private _router: Router,private currentroute:CurrentrouteService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
   //current:string =this.currentroute.getcurrentroute();
  
    if (!this._LoginService.loggedIn() || !this._LogintService.loggedInt() )  {
      return true
    } 
    
    else {
       this._router.navigate([this.currentroute.getcurrentroute()])
       return false
       
    }
  }
  
}
