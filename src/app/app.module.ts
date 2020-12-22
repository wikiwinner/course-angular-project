import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './includes/footer/footer.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AboutacademyComponent } from './components/about/aboutacademy/aboutacademy.component';
import { AboutteachersComponent } from './components/about/aboutteachers/aboutteachers.component';
import { CourseComponent } from './components/course/course.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { StudentsComponent } from './components/achievements/students/students.component';
import { StatisticComponent } from './components/achievements/statistic/statistic.component';
import {UserService} from './service/user.service';
import {LoggingService} from './service/logging.service';
import { SidebarComponent } from './includes/sidebar/sidebar.component';
import { Sidebar1Component } from './includes/sidebar/sidebar1/sidebar1.component';
import { Sidebar2Component } from './includes/sidebar/sidebar2/sidebar2.component';
import { Sidebar3Component } from './includes/sidebar/sidebar3/sidebar3.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/dashboard/nav/nav.component';
import { SigninComponent } from './components/dashboard/signin/signin.component';
import { SignupComponent } from './components/dashboard/signup/signup.component';
import { AdminHomeComponent } from './components/dashboard/admin-home/admin-home.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { CourseSingleComponent } from './components/course-single/course-single.component';
import { NewsSingleComponent } from './components/news-single/news-single.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    AboutacademyComponent,
    AboutteachersComponent,
    CourseComponent,
    AdmissionsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AchievementsComponent,
    StudentsComponent,
    StatisticComponent,
    SidebarComponent,
    Sidebar1Component,
    Sidebar2Component,
    Sidebar3Component,
    DashboardComponent,
    NavComponent,
    SigninComponent,
    SignupComponent,
    AdminHomeComponent,
    CourseSingleComponent,
    NewsSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserService, LoggingService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
