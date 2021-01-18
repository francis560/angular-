import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.scss']
})
export class StudentAccountComponent implements OnInit {

  title: string = 'Cuenta de estudiante';
  studentForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder, private titleService: Title, private auth: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.setTitle(this.title);

    this.studentForm = this.FormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  saveStudentAccount (value: any) {
    this.auth.studentAccount(value).subscribe((res: any) => {

      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);

    }, err => {
      console.error(err);
    });
  }

}
