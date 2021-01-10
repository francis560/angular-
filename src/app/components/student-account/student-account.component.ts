import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.scss']
})
export class StudentAccountComponent implements OnInit {

  studentForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.studentForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }


}
