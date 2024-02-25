import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { users } from '../Model/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<users | null>(null);
  users:users[]=[{
    email : 'user@gmail.com',
    password: '1234'
  }]
  constructor(private router: Router) { }




  signIn(auth : users){
    const user = this.users.filter((user:users)=> user.email.toLowerCase() == auth.email.toLowerCase() && user.password == auth.password)[0];  
    if(!user) 
     {
      alert("wrong credential");
      return;
     }
    else
     {
      this.user$.next(user)
      this.router.navigate(['/todo']);
     }
  }

  logout()
  {
    this.user$.next(null)
    this.router.navigate(['login'])
  }



  
  
}
