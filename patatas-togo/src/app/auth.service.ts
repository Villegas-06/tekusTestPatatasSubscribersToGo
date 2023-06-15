import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, of  } from 'rxjs';
import { map} from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    const isLoggedIn = this.checkIfUserIsLoggedIn(); // Authentication Service

    return isLoggedIn.pipe(
      map((loggedIn) => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
        return loggedIn;
      })
    );
  }

  public checkIfUserIsLoggedIn(): Observable<boolean> {

    const token = localStorage.getItem('token');
    const isLoggedIn = !!token; // Convert token to boolean


    return of(isLoggedIn); // Check the observable if true or false;
  }
}
