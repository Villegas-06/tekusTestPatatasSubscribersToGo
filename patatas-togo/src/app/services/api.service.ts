import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiSubsUrl = 'https://lab.app.invertebrado.co/api/subscribers/';
  private token = localStorage.getItem('token');

  constructor(private http:HttpClient, private router: Router) { }

  getData(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(this.apiSubsUrl, { headers });
  }

  logout(): void{

    this.token = null;
    localStorage.setItem('token', "");
    this.router.navigate(['/login']);

  }

}