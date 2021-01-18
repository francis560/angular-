import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { DataUserService } from '../../services/data-user.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  title: string = 'Grupos';
  groupVerify: boolean = true;
  permisos!: boolean ;
  
  prueba: Array<any> = [];

  constructor( private router: Router, private titleService: Title, private dataUserService: DataUserService) { }


  ngOnInit(): void {
    this.setTitle(this.title);
    var count = 0;
    for (let item in this.prueba) {
      count++
    }
    if (count >= 1) {
      this.groupVerify = false;
    } else {
      this.groupVerify = true;
    }

    this.dataUserService.getDataProfile().subscribe((res: any) => {
      this.permisos = res.permisos;
    }, err => {
      console.error(err);
    });
  }

  exitGroup (data: any) {

    Swal.fire({
      icon: 'question',
      title: '¿Seguro que quieres dejar el grupo?',
      showDenyButton: true,
      allowOutsideClick: false,
      stopKeydownPropagation: true,
      confirmButtonText: `Aceptar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {

      if (result.isConfirmed) {
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
          icon: 'success',
          title: 'Dejaste el grupo con éxito'
        });
      } else if (result.isDenied) {
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
      }
    });
  }

  async editGroup (data: any) {
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
      stopKeydownPropagation: true
    }).queue([
      {
        title: 'Editar datos del grupo',
        text: 'Ingrese un nuevo nombre de grupo',
        inputPlaceholder: 'Nombre de grupo',
        inputValue: 'sad'
      },
      {
        title: 'Editar datos del grupo',
        text: 'Ingrese nuevas materias para su grupo',
        inputPlaceholder: 'Materias',
        confirmButtonText: 'Actualizar',
        inputValue: 'sad2'
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

  deleteGroup (data: any) {
    Swal.fire({
      icon: 'question',
      title: '¿Seguro que quieres eliminar el grupo?',
      text: 'Este grupo será eliminado para todos sus estudiantes',
      showDenyButton: true,
      allowOutsideClick: false,
      stopKeydownPropagation: true,
      confirmButtonText: `Aceptar`,
      denyButtonText: `Cancelar`,
    }).then((result) => {

      if (result.isConfirmed) {
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
          icon: 'success',
          title: 'Grupo eliminado con éxito'
        });
      } else if (result.isDenied) {
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
      }
    });
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
