import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/modules/material.module'; 
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login'
  },
  {
    path: 'auth/login',
    component: LoginComponent, 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{bindToComponentInputs: true}),
    CommonModule,
    MaterialModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
