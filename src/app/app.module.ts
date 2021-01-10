import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavV1Component } from './components/nav-v1/nav-v1.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { NavV2Component } from './components/nav-v2/nav-v2.component';
import { SigninComponent } from './components/signin/signin.component';
import { TeacherAccountComponent } from './components/teacher-account/teacher-account.component';
import { StudentAccountComponent } from './components/student-account/student-account.component';
import { Error404Component } from './components/error404/error404.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { NavV3Component } from './components/nav-v3/nav-v3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavV1Component,
    FooterComponent,
    CreateAccountComponent,
    NavV2Component,
    SigninComponent,
    TeacherAccountComponent,
    StudentAccountComponent,
    Error404Component,
    PaginaPrincipalComponent,
    NavV3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
