import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.scss']
})
export class GroupMembersComponent implements OnInit {

  @Input('dataprueba') dataprueba: any;

  constructor(private http: HttpClient) { }

  users: any;

  ngOnInit(): void {
    this.http.get('https://limitless-reef-07476.herokuapp.com/api/users').subscribe(res => {
      this.users = res;
    });

    console.log(this.dataprueba);
  }

}