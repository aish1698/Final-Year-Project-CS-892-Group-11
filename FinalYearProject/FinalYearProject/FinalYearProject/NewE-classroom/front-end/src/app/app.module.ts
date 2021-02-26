// built-in imports
import { HttpClientModule } from '@angular/common/http' ;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
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


import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { teacherregistrationComponent } from './teacherregistration/teacherregistration.component';
import { SignupComponent } from './signup/signup.component';
import { Nav1Component } from './nav1/nav1.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    registerComponent,
    loginComponent,
    ContactComponent,
    NavComponent,
    HomeComponent,
   
    
    AllProfilesComponent,
    CreateProfileComponent,
    teacherregistrationComponent,
    SignupComponent,
    Nav1Component,
    SigninComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   ReactiveFormsModule,
   MatIconModule

  ],
providers: [AuthGuard, LoginService],
bootstrap: [AppComponent]
})
export class AppModule { }

