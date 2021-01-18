import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  @Input('groupCode') groupCode!: string;

  formPeriodos!: FormGroup;
  formAsignaturas!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPeriodos = this.formBuilder.group({
      periodo: ['', [Validators.required]]
    });

    this.formAsignaturas = this.formBuilder.group({
      asignatura: ['', [Validators.required]]
    });
  }

  materias: Array<any> = []
  meses: number[] = [];

  dataMeses: any;
  dataMaterias: any;

  agregarMeses () {
    this.meses.push(this.dataMeses);
    this.dataMeses = '';
  }

  agregarMaterias () {
    this.materias.push( { materias: this.dataMaterias } );
    this.dataMaterias = '';
  }

  nota: any = [];

  guardarNota () {
    var datoFinal = [];
    for (let item in this.materias) {
      
      var notes = [];
      for (let j in this.meses) {
        var datos: any = (<HTMLInputElement>document.getElementById(`valorNota${item}${j}`)).value;
        notes.push(datos);
      }

      this.nota = notes;
      datoFinal.push( {materias: this.materias[item], meses: this.meses, nota: this.nota} );
    }
    
    //colocar metodo post aqui con la variable datoFinal
    
  }

}