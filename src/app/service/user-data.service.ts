import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = "http://localhost:8080/api/v1/user/save"

  constructor(private http:HttpClient) { }
  saveUserData(data:any){
    console.log(data);
    return this.http.post(this.url,data)
  }
}

