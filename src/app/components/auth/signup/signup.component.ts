import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.matchPasswords.bind(this)]]
    });
  }

  // Access controls using index signature
  getControl(controlName: string) {
    return this.signUpForm.controls[controlName];
  }

  // Helper function to check for errors safely
  hasError(controlName: string, errorName: string) {
    const control = this.getControl(controlName);
    return control && control.errors ? control.errors[errorName] : null;
  }

  matchPasswords(control: any): { [key: string]: boolean } | null {
    if (this.signUpForm) {
      return control.value === this.signUpForm.controls['password'].value ? null : { mismatch: true };
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;

    if (this.signUpForm.invalid) {
      return;
    }
    console.log(this.signUpForm.value);
    // Handle sign up logic here
  }
}
