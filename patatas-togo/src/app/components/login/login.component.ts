import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SubscribersComponent } from '../subscribers/subscribers.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    const body = {
      UserName: username,
      Password: password,
    };

    this.http
      .post<any>('https://lab.app.invertebrado.co/api/account/login', body)
      .subscribe(
        (response) => {

          // Save the token in local storage
          const token = response.Token;

          //Redirect to subscribers page when the user is valid

          this.router.navigate(['/subscribers']);


        },
        (error) => {
          alert(
            'Credentials are not correct, please check and try again' + error
          );
        }
      );
  }
}
