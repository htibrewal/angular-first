import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: LoginService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get formControls() {
    return this.authForm.controls;
  }

  logIn() {
    this.isSubmitted = true;
    if(this.authForm.invalid) {
      return;
    }

    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/home');
  }

}
