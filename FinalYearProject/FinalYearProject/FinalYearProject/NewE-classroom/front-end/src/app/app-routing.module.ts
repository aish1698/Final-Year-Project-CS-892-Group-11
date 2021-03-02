import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { registerComponent } from 'src/app/user/register/register.component';
import { loginComponent } from './user/login/login.component';
import { teacherregistrationComponent } from './teacherregistration/teacherregistration.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';

import { CreateProfileComponent } from './components/create-profile/create-profile.component';

import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TeachingComponent } from './teaching/teaching.component';
import { loginteacherComponent } from './user/loginteacher/loginteacher.component';
import{ForgotpasswordteacherComponent} from './forgotpasswordteacher/forgotpasswordteacher.component'

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
},
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'sign-in',component: loginComponent
  },
  {
    path: 'student-sign-up',component: registerComponent
    
  },
  {
    path: 'teacher-sign-up',component: teacherregistrationComponent
    
  },
  {
    path: 'teacher-sign-in',component: loginteacherComponent
    
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:'forgotpassword',component:ForgotpasswordComponent
  },
  {
    path:'forgotpasswordteacher',component : ForgotpasswordteacherComponent
  },
  {
    path: 'create-profile',component: CreateProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'all-profiles',component: AllProfilesComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },

 
  {
    path: 'teaching',
    component: TeachingComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
