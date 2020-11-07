import { GithubFollowerService } from './services/github-follower.service';
import { RouterModule } from '@angular/router';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SingupFormComponent } from './singup-form/singup-form.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InputFormatDirective } from './input-format.directive';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { PostComponent } from './post/post.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    DirectivasComponent,
    ContactFormComponent,
    InputFormatDirective,
    SingupFormComponent,
    NewCourseFormComponentComponent,
    PostComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'', 
        component: HomeComponent 
      },
      {
        path:'followers/:id/:username', 
        component: GithubProfileComponent 
      },
      {
        path:'followers', 
        component: GithubFollowersComponent
      },
      {
        path:'post', 
        component: PostComponent
      },
      {
        path:'formControllers',
        component: NewCourseFormComponentComponent
      },
      {
        path:'singupFormController',
        component: SingupFormComponent
      },
      {
        path:'templateDrivenForm',
        component: ContactFormComponent
      },
      {
        path:'**', 
        component: NotFoundComponent 
      }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GithubFollowerService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
