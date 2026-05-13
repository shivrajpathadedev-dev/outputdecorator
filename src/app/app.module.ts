import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './material/material.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentFormComponent } from './component/student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent,
    StudentDashboardComponent,
    StudentListComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MaterialModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
