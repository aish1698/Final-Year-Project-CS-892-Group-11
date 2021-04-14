import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { registerComponent } from 'src/app/user/register/register.component';
import { loginComponent } from './user/login/login.component';
import { teacherregistrationComponent } from './teacherregistration/teacherregistration.component';
import { AuthGuard } from './auth.guard';
import {AuthTeacherGuard} from './auth-teacher.guard';
import { ContactComponent } from './contact/contact.component';


import { SigninComponent } from './signin/signin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { SignupComponent } from './signup/signup.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TeachingComponent } from './teaching/teaching.component';
import { loginteacherComponent } from './user/loginteacher/loginteacher.component';
import{ForgotpasswordteacherComponent} from './forgotpasswordteacher/forgotpasswordteacher.component'
import { LearningComponent } from './learning/learning.component';
import { LearningstudentComponent } from './learningstudent/learningstudent.component';
import { AssignmentUploadComponent } from './assignment-upload/assignment-upload.component';
import { AssignmentdownComponent } from './assignmentdown/assignmentdown.component';
import { AssignmentdownloadComponent } from './assignmentdownload/assignmentdownload.component';

import { AuthHomeGuard } from './auth-home.guard';
import { AnswerUploadComponent } from './answer-upload/answer-upload.component';
import { AnswerdownComponent } from './answerdown/answerdown.component';
import { VideoCallComponent } from './video-call/video-call.component';

import { AnswerdownloadComponent } from './answerdownload/answerdownload.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
},
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthHomeGuard]
  },

  {
    path: 'sign-in',component: loginComponent,
    
  },
  {
    path: 'student-sign-up',component: registerComponent,
    canActivate:[AuthHomeGuard]

  },
  {
    path: 'teacher-sign-up',component: teacherregistrationComponent,
    canActivate:[AuthHomeGuard]


  },
  {
    path: 'teacher-sign-in',component: loginteacherComponent,
   

  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:'forgotpassword',component:ForgotpasswordComponent,
    
  },
  {
    path:'forgotpasswordteacher',component : ForgotpasswordteacherComponent
  },


  {
    path: 'signup',
    component: SignupComponent,
    canActivate:[AuthHomeGuard]
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    canActivate:[AuthTeacherGuard]
  },
  {
    path:'assignment-upload',component:AssignmentUploadComponent,
    canActivate:[AuthTeacherGuard]
  },
  {
    path:'answer-upload',component:AnswerUploadComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'student',
    component: StudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate:[AuthHomeGuard]

  },
  {
    path: 'teaching',
    component: TeachingComponent,
    canActivate:[AuthTeacherGuard]
  },
  {
    path: 'learning',
    component: LearningComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'assignmentdown',
    component: AssignmentdownComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'video-call',
    component: VideoCallComponent
  },
  {
    path: 'assignmentdownload/:sem/:subject',
    component: AssignmentdownloadComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'answerdown',
    component: AnswerdownComponent,
    canActivate:[AuthTeacherGuard]
  },
  {
    path: 'answerdownload/:sem/:subject',
    component: AnswerdownloadComponent,
    canActivate:[AuthTeacherGuard]
  },
  {
    path: 'learningstudent/:sem/:subject',
    component: LearningstudentComponent,
    canActivate:[AuthGuard]

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
