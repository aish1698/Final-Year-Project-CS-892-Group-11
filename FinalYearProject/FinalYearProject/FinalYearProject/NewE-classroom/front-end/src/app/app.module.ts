// built-in imports
import { HttpClientModule } from '@angular/common/http' ;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';  

// components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerComponent } from './user/register/register.component';
import { loginComponent } from './user/login/login.component';
import { AuthGuard } from './auth.guard';
import { LoginService } from './user/login/login.service';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import{ForgotpasswordteacherComponent} from './forgotpasswordteacher/forgotpasswordteacher.component'
import { loginteacherComponent } from './user/loginteacher/loginteacher.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { teacherregistrationComponent } from './teacherregistration/teacherregistration.component';
import { SignupComponent } from './signup/signup.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TeachingComponent } from './teaching/teaching.component';
import { LearningComponent } from './learning/learning.component';
import { LearningstudentComponent } from './learningstudent/learningstudent.component';
import { AssignmentUploadComponent } from './assignment-upload/assignment-upload.component';
import { AnswerUploadComponent } from './answer-upload/answer-upload.component';
import { AssignmentdownComponent } from './assignmentdown/assignmentdown.component';
import { AssignmentdownloadComponent } from './assignmentdownload/assignmentdownload.component';
import { AnswerdownComponent } from './answerdown/answerdown.component';
import { AnswerdownloadComponent } from './answerdownload/answerdownload.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AuthTeacherGuard } from './auth-teacher.guard';
import {AuthHomeGuard} from './auth-home.guard';
import { LoginteacherService } from './user/loginteacher/loginteacher.service';
@NgModule({
  declarations: [
    AppComponent,
    registerComponent,
    loginComponent,
    ContactComponent,
    NavComponent,
    HomeComponent,
    teacherregistrationComponent,
    SignupComponent,
   TeacherComponent,
   StudentComponent,
    SigninComponent,
    ForgotpasswordComponent,
    ForgotpasswordteacherComponent,
    TeachingComponent,
    loginteacherComponent,
    LearningComponent,
    LearningstudentComponent,
    AssignmentdownComponent,
    AssignmentdownloadComponent,
    AnswerdownComponent,
    AnswerdownloadComponent,
    AssignmentUploadComponent,
    VideoCallComponent,
    AnswerUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   ReactiveFormsModule,
   MatIconModule,
   MatProgressBarModule
  ],
providers: [AuthGuard,AuthTeacherGuard,AuthHomeGuard,LoginteacherService,LoginService],
bootstrap: [AppComponent]
})
export class AppModule { }
