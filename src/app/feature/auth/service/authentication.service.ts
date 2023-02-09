import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface View {
  email: string;
  userName: string;
  password: string;
  role: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private users: View[] = [
    {
      email: 'admin@gmail.com',
      userName: 'admin',
      password: '1234567',
      role: 'admin',
    },
    {
      email: 'user@gmail.com',
      userName: 'user',
      password: '1234567',
      role: 'user',
    },
  ];

  constructor() {}
  isLoggedIn() {
    return !!localStorage.getItem('email');
  }

  login(users:{email:string,password:string}){
   return of(this.users.find((res)=>res.email === users.email && res.password === users.password))
  }

  isContentRole(){
    return false
  }

}
