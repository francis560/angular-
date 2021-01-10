import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-v3',
  templateUrl: './nav-v3.component.html',
  styleUrls: ['./nav-v3.component.scss']
})
export class NavV3Component implements OnInit {

  constructor() { 
    this.valor = true
  }

  ngOnInit(): void {
  }

  valor: boolean;

  groupJoin () {
    Swal.fire({
      title: 'Únete a un grupo',
      icon: 'question',
      input: 'text',
      inputValidator: (value): any => {
        if (!value) {
          return 'Debes completar los campos'
        }
      },
      inputLabel: 'Ingrese el código de un grupo',
      inputPlaceholder: 'Código de grupo',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Unirme',
      buttonsStyling: true,
      allowOutsideClick: false,
      stopKeydownPropagation: true,
    });
  }

  async groupCreate () {
    const { value } = await Swal.mixin({
      input: 'text',
      inputValidator: (value): any => {
        if (!value) {
          return 'Debes completar los campos'
        }
      },
      confirmButtonText: 'Siguiente',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      allowOutsideClick: false,
      stopKeydownPropagation: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        icon: 'question',
        title: '¿Cual es el nombre del grupo?',
        text: 'Ingrese un nombre que describa su grupo',
        inputPlaceholder: 'Nombre de grupo'
      },
      {
        icon: 'question',
        title: 'Coloca las materias de tu grupo',
        text: 'Ingrese las materias que su grupo debe tener',
        inputPlaceholder: 'Materias'
      }
    ]);
    
    console.log(value)
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Grupo creado con exito'
      })
  }

}
