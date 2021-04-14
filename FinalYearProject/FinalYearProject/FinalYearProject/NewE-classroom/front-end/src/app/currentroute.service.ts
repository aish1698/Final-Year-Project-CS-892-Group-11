import { Injectable } from '@angular/core';
import { CanActivate, Router,Event,  NavigationEnd } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CurrentrouteService {
private current:string='';
  constructor(private router:Router) { }
  // getcurrentroute(){
  //   this.router.events.subscribe((event:Event)=>
  //   {
  //     console.log("ok");
  //     console.log((<NavigationEnd>event).url);
  //   }
  //   )
  // }
   getcurrentroute(){
    return localStorage.getItem("current");
  }
  setcurrentroute(){
    this.current=this.router.url;
    localStorage.setItem("current",this.current);
    // console.log(this.current);
  }
}
