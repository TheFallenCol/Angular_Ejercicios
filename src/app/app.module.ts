import { SingupFormComponent } from './singup-form/singup-form.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    NewCourseFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
