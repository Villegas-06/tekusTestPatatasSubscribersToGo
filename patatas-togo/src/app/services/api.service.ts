import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiSubsUrl = 'https://lab.app.invertebrado.co/api/subscribers/';
  private token = localStorage.getItem('token');

  constructor(private http:HttpClient, private router: Router) { }

  getData(page: number, count:number,  query: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${ this.token} `);
    const params = { page: page.toString(), count: count.toString(), criteria: query };
    return this.http.get<any>(this.apiSubsUrl, { headers, params });
  }

  createSubscriber(subscriberData: any): Observable<any> {

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.post<any>(this.apiSubsUrl, subscriberData, {headers});

  }

  logout(): void{
    console.log(this.token)


    this.token = null;
    localStorage.setItem('token', "");
    this.router.navigate(['/login']);



  }

}
