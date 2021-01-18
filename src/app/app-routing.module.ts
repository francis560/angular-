import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { CreateAccountComponent } from './components/create-account/create-account.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { Error404Component } from './components/error404/error404.component';
import { GroupComponent } from './components/group/group.component';
import { HomeComponent } from './components/home/home.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { SigninComponent } from './components/signin/signin.component';
import { StudentAccountComponent } from './components/student-account/student-account.component';
import { TeacherAccountComponent } from './components/teacher-account/teacher-account.component';

const routes: Routes = [

  { path: '', component: PaginaPrincipalComponent, canActivate: [AuthGuard] },
  { path: 'editAccount', component: EditAccountComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent }, 
  { path: 'signin', component: SigninComponent },
  { path: 'create', component: CreateAccountComponent },
  { path: 'teacherAccount', component: TeacherAccountComponent },
  { path: 'studentAccount', component: StudentAccountComponent },
  { path: 'group/:id', component: GroupComponent, canActivate: [AuthGuard] },
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
