import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.scss']
})
export class ViewNotesComponent implements OnInit {

  @Input('dataprueba') dataprueba: any;

  viewNoteVerify!: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataprueba);

    if (this.tablaDataPrueba.length === 0) {
      this.viewNoteVerify = true;
    } else {
      this.viewNoteVerify = false;
    }
  }

  tablaDataPrueba: any = [

    // {materias: 'sociales', meses: ['1pr', '2pr', '3pr', '4pr'], nota: ['23', '32', '45', '35']},
    // {materias: 'matematica', meses: ['1pr', '2pr', '3pr', '4pr'], nota: ['98', '56', '76', '88']},
    // {materias: 'ingles', meses: ['1pr', '2pr', '3pr', '4pr'], nota: ['91', '50', '95', '100']},
    // {materias: 'sociales', meses: ['1pr', '2pr', '3pr', '4pr'], nota: ['23', '32', '45', '35']},
    // {materias: 'matematica', meses: ['1pr', '2pr', '3pr', '4pr'], nota: ['98', '56', '76', '88']},
    // {materias: 'ingles', meses: ['1pr', '2pr', '3pr', '4pr'], nota: ['91', '50', '95', '100']}

  ];

}
