import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  forgotPasswordForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Access controls using index signature
  getControl(controlName: string) {
    return this.forgotPasswordForm.controls[controlName];
  }

  // Helper function to check for errors safely
  hasError(controlName: string, errorName: string) {
    const control = this.getControl(controlName);
    return control && control.errors ? control.errors[errorName] : null;
  }

  onSubmit() {
    this.submitted = true;

    if (this.forgotPasswordForm.invalid) {
      return;
    }
    // Handle sending reset link logic here
    console.log('Reset link sent to:', this.forgotPasswordForm.value.email);
  }
}
