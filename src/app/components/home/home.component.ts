import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Express Notes';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle(this.title);
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
