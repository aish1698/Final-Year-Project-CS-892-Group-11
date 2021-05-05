import { Injectable } from '@angular/core';
import { Result } from './result.model' ;
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  selectedResult: Result = {

  name: '',
  dept: '',
  sem: '',
  subject: '',
  class_roll: '',
  scores: '',

  };


  constructor(private http:HttpClient) { }
  postUser(result: Result){
    return this.http.post(environment.apiBaseUrl+'/resultupload',result);
}


}
