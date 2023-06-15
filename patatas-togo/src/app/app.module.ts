import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';

import { AuthInterceptor } from './auth/interceptor.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' } ,
  { path: 'subscribers', component: SubscribersComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscribersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  exports:[
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private authService: AuthService, private router: Router) {
    // Check if is authenticated and load the aplication.
    authService.checkIfUserIsLoggedIn().subscribe(authenticated => {
      if (!authenticated) {
        //Redirect to login page if is not authenticated
        router.navigate(['/login']);
      }else{
        //Redirect to subscribers page if is authenticated
        router.navigate(['/subscribers']);
      }
    });
  }

}
