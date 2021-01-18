import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  title: string = 'Crear cuenta';

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle(this.title);
  }


  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  teacherAccount () {
    this.router.navigate(['/teacherAccount']);
  }

  studentAccount () {
    this.router.navigate(['/studentAccount']);
  }

}
