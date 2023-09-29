import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
 
@Injectable({ providedIn: 'root' })
export class AuthService {
  
  private apiUrl = '/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }
 
  logout(): void {
    // Implement logout logic here, e.g., clearing local storage, redirecting to login page, etc.
    localStorage.removeItem('currentUser');
  }

  saveUserToLocalStorage(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): any {
    return localStorage.getItem('currentUser');
  }
  authenticated():boolean{
    let u=localStorage.getItem('currentUser');
    if(u)return true;
    return false;
  }
}