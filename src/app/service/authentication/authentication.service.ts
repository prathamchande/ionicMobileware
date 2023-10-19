import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/loginuser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   users:User[] = [
    { username: 'username', password: 'password' },
   
  ];
  private isAuthenticated = false;
  constructor() {
   
   }
   authenticate(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    this.isAuthenticated = !!user;
    return this.isAuthenticated; // Returns true if user is found, false otherwise
  }
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
