import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenSubject = new Subject<string | null>();
  token$ = this.tokenSubject.asObservable();

  updateToken(token: string | null) {
    this.tokenSubject.next(token);
  }
}
