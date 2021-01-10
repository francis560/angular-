import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor( private router: Router) { }

  permisos: boolean = true;

  ngOnInit(): void {
  }

  // grupo () {
  //   this.router.navigate(['/grupo/sada-asds-asdd-asdc']);
  // }

}
