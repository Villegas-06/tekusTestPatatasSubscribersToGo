import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';

import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/interceptor.component';

import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' } ,
  { path: 'subscribers', component: SubscribersComponent },
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
export class AppModule { }
