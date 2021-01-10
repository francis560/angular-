import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { SigninComponent } from './components/signin/signin.component';
import { StudentAccountComponent } from './components/student-account/student-account.component';
import { TeacherAccountComponent } from './components/teacher-account/teacher-account.component';

const routes: Routes = [

  
  { path: 'home', component: HomeComponent }, 
  { path: 'home/signin', component: SigninComponent },
  { path: 'home/create', component: CreateAccountComponent },
  { path: 'home/create/teacherAccount', component: TeacherAccountComponent },
  { path: 'home/create/studentAccount', component: StudentAccountComponent },
  

  { path: '', component: PaginaPrincipalComponent },
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
