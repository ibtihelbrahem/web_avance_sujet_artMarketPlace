import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://127.0.0.1:3000/artist/';
  private isAuthenticated = false;
  authToken:any;
  constructor(private http: HttpClient, private router:Router) { }

  register (new_artist: any){
    return this.http.post(this.url + '/register' , new_artist)
  }
  login(credentials: { email: string, password: string }) {
    const loginUrl = `${this.url}/login`;
    return this.http.post(loginUrl, credentials).pipe(
      tap((response: any) => {
       
        this.authToken = response.token;
        this.isAuthenticated = true;
         localStorage.setItem('token', this.authToken);
      })
    );
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isAuthenticated =false;
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  getAuthToken(): string {
    return this.authToken;
  }
  getArtistNameById(id: any) {
    return this.http.get(this.url + '/getname/' + id)
  }
  getUserIdFromToken(): string | null {
    const token = localStorage.getItem('token');
  
    try {
      if (token) {
        const decodedToken: any = JSON.parse(atob(token.split('.')[1]));
        return decodedToken._id || null; 
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  
    return null;
  }
  
  
}