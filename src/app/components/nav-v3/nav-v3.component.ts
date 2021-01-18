import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-v3',
  templateUrl: './nav-v3.component.html',
  styleUrls: ['./nav-v3.component.scss']
})
export class NavV3Component implements OnInit {

  @Input() permisos!: boolean;
  editAccountForm!: FormGroup;


  constructor(private FormBuilder: FormBuilder, private router: Router) {}
  
  ngOnInit(): void {
    this.editAccountForm = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }


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
      stopKeydownPropagation: true
    }).then(result => {

      if (result.isConfirmed) {
        
        this.router.navigate(['/group/', result.value]);

      }

    });
  }

  async groupCreate () {
    await Swal.mixin({
      input: 'text',
      inputValidator: (value): any => {
        if (!value) {
          return 'Debes completar los campos'
        }
      },
      showConfirmButton: true,
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
        inputPlaceholder: 'Materias',
        footer: 'Separa las materias con una coma o un espacio'
      }
    ]).then((res: any) => {
      
      if (res.dismiss == "cancel") {
    
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
        });
  
        Toast.fire({
          icon: 'info',
          title: 'Acción cancelada'
        });

      } else {
        console.log(res);
        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: 'bottom-end',
        //   showConfirmButton: false,
        //   timer: 3000,
        //   timerProgressBar: true,
        //   didOpen: (toast) => {
        //     toast.addEventListener('mouseenter', Swal.stopTimer)
        //     toast.addEventListener('mouseleave', Swal.resumeTimer)
        //   }
        // })
        
        // Toast.fire({
        //   icon: 'success',
        //   title: 'Grupo creado con exito'
        // })
      }

    })
    
  }

  editAccount () {
    this.router.navigate(['/editAccount']);
  }

  cerrarSesion () {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

}