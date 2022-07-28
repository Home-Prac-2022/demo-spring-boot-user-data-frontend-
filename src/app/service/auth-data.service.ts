import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string ) {
    return this.http.post<User>('/api/v1/users/login', {email, password})
      .shareReplay();

  }

}
