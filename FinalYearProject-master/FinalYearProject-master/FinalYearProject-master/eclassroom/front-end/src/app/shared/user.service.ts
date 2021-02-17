import { Injectable } from '@angular/core';
import { User } from './user.model' ;
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    userid: '',
    email: '',
    mobile: '',
    password: ''
  };


  constructor(private http:HttpClient) { }
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
}
}