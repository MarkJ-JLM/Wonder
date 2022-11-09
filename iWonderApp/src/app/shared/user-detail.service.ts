import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient) { }

  formData:UserDetail = new UserDetail();
  readonly baseURL = "http://localhost:27695/api/UserDetail"

  postUserDetail(){
    return this.http.post(this.baseURL,this.formData);
  }
}
