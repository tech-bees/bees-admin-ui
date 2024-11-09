import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Access controls using index signature
  getControl(controlName: string) {
    return this.loginForm.controls[controlName];
  }

  // Helper function to check for errors safely
  hasError(controlName: string, errorName: string) {
    const control = this.getControl(controlName);
    return control && control.errors ? control.errors[errorName] : null;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    // Navigate to dashboard on successful login 
    this.router.navigate(['/pages/home']);
  }

  onForgotPassword() {
    console.log('Forgot Password clicked');
    // Logic for "Forgot Password" action
  }
}
