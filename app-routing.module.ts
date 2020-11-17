import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import  {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {RegisterComponent} from './register/register.component';
import {RecruiterDashboardComponent} from './recruiter-dashboard/recruiter-dashboard.component';
const routes: Routes = [
  { path: '',component:LoginComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'user-dashboard/:id',component:UserDashboardComponent },
  { path: 'login',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
