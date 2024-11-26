import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { StorageService } from '../../../shared/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  submitted = false;
  roles: string[] = [];
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder, 
    private router: Router,   
    private authService: AuthService, 
    private storageService: StorageService) {
      
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  } 
  
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
 
  // Helper function to check for errors safely
  hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  login(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } 
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe({
      next: data => {
        this.storageService.saveUser(data); 
        this.roles = this.storageService.getUser().roles;
        this.router.navigate(['/pages/home']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });

  }   
}
