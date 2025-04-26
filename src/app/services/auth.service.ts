import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly isLoggedInKey = 'isLoggedIn';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem(this.isLoggedInKey, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.isLoggedInKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.isLoggedInKey) === 'true';
  }
}

