import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { DataUserService } from './services/data-user.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
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
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { GroupComponent } from './components/group/group.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';
import { ViewNotesComponent } from './components/view-notes/view-notes.component';
import { NavV4Component } from './components/nav-v4/nav-v4.component';

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
    NavV3Component,
    EditAccountComponent,
    GroupComponent,
    CreateNoteComponent,
    GroupMembersComponent,
    ViewNotesComponent,
    NavV4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, DataUserService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
//reparar error de httpInterceptor
//{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }