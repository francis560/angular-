import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-account',
  templateUrl: './teacher-account.component.html',
  styleUrls: ['./teacher-account.component.scss']
})
export class TeacherAccountComponent implements OnInit {

  teacherForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.teacherForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }
  
}