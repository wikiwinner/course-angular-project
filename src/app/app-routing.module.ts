import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutacademyComponent } from './components/about/aboutacademy/aboutacademy.component';
import { AboutteachersComponent } from './components/about/aboutteachers/aboutteachers.component';
import { CourseComponent } from './components/course/course.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/dashboard/signin/signin.component';
import { SignupComponent } from './components/dashboard/signup/signup.component';
import { AdminHomeComponent } from './components/dashboard/admin-home/admin-home.component';
import {AuthGuard} from './auth.guard';
import { CourseSingleComponent } from './components/course-single/course-single.component';
import { NewsSingleComponent } from './components/news-single/news-single.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutacademy', component: AboutacademyComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'aboutteachers', component: AboutteachersComponent},
  {path: 'course', component: CourseComponent},
  {path: 'admission', component: AdmissionsComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'achievements', component: AchievementsComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'course-single', component: CourseSingleComponent},
  {path: 'news-single', component: NewsSingleComponent},
  { path: '', component: AdminHomeComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: AdminHomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
