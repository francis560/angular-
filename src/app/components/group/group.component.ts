import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  viewShowMembers!: boolean;
  viewShowNotes!: boolean;
  classActiveMembers!: string;
  classActiveNotes!: string;
  headerBgColor: any;
  
  createNote: boolean = false;
  permisos: boolean = true;
  title: string = 'Santa Ana 5to';
  groupCode: any;
  groupColor: Array<any> = [{color: 'bg-danger', btn: 'bg-danger btn mx-2 my-2'}, {color: 'bg-primary', btn: 'bg-primary btn mx-2 my-2'}, {color: 'bg-success', btn: 'bg-success btn mx-2 my-2'}, {color: 'bg-info', btn: 'bg-info btn mx-2 my-2'}, {color: 'bg-dark', btn: 'bg-dark btn mx-2 my-2'}, {color: 'bg-warning', btn: 'bg-warning btn mx-2 my-2'}, {color: 'colorUno', btn: 'colorUno btn mx-2 my-2'}, {color: 'colorDos', btn: 'colorDos btn mx-2 my-2'}, {color: 'bg-secondary', btn: 'bg-secondary btn mx-2 my-2'}];
  groupColorGradient: Array<any> = [{color: 'degradadoUno', btn: 'degradadoUno btn mx-2 my-2'}, {color: 'degradadoDos', btn: 'degradadoDos btn mx-2 my-2'}, {color: 'degradadoTres', btn: 'degradadoTres btn mx-2 my-2'}, {color: 'degradadoCuatro', btn: 'degradadoCuatro btn mx-2 my-2'}, {color: 'degradadoCinco', btn: 'degradadoCinco btn mx-2 my-2'}, {color: 'degradadoSeis', btn: 'degradadoSeis btn mx-2 my-2'}, {color: 'degradadoSiete', btn: 'degradadoSiete btn mx-2 my-2'}];

  constructor(private titleService: Title, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setTitle(this.title);

    this.groupCode = this.route.snapshot.paramMap.get('id');

    this.headerBgColor = localStorage.getItem('bgcolor' + `${this.groupCode}`);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  

  viewMembers () {
    this.classActiveNotes = '';
    this.classActiveMembers = 'active';
    this.viewShowNotes = false;
    this.viewShowMembers = true;
  }

  viewNotes () {
    this.classActiveMembers = '';
    this.classActiveNotes = 'active';
    this.viewShowMembers = false;
    this.viewShowNotes = true;
  }

  groupBgColor (value: any) {
    localStorage.removeItem('bgcolor' + `${this.groupCode}`);
    localStorage.setItem('bgcolor' + `${this.groupCode}`, value);
  }
}
