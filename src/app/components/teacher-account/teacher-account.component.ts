import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-account',
  templateUrl: './teacher-account.component.html',
  styleUrls: ['./teacher-account.component.scss']
})
export class TeacherAccountComponent implements OnInit {

  title: string = 'Cuenta de maestro';
  teacherForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder, private titleService: Title, private auth: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.setTitle(this.title);

    this.teacherForm = this.FormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


  saveTeacherAccount (value: any) {
    this.auth.teacherAccount(value).subscribe((res: any) => {

      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);

    }, err => {
      console.error(err)
    });
    //usar subscribe para sacar posibles errores
  }

}