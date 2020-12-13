import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogElegirEoComponent } from "../../dialog/dialog-elegir-eo/dialog-elegir-eo.component";
import { DialogElegirMateriaComponent } from "../../dialog/dialog-elegir-materia/dialog-elegir-materia.component";
import { CREATE_DENUNCIA } from "../../../graphql/denuncia";
import { Apollo } from 'apollo-angular';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-denuncia',
  templateUrl: './form-denuncia.component.html',
  styleUrls: ['./form-denuncia.component.css']
})

export class FormDenunciaComponent implements OnDestroy {

  denuncia = {
    idRecurso: null,
    direccion: null,
    celular: null,
    email: null,
    idEO: null,
    idServicio: null,
    idMateria: null,
    idDitrito: null
  }

  nombre: String;
  dni: String;
  paterno: String;
  materno: String;

  idRecurso: any;

  autorizo: boolean = false;

  s_getDenuncias!: Subscription;

  eo = { id: null, nombre: null };
  materia = { id: null, nombre: null };

  constructor(public dialog: MatDialog, private apollo: Apollo, private router: Router) {
    let persona = JSON.parse(sessionStorage.getItem('usuario') as string);
    this.dni = persona.dni;
    this.nombre = persona.name;
    this.paterno = persona.first_name;
    this.materno = persona.last_name;
  }

  crearDenuncia() {
    let session: any = sessionStorage.getItem('usuario');
    let idCliente = JSON.parse(session).id;
    if (typeof (idCliente) != 'undefined') {
      let variable = {
        idRecurso: this.denuncia.idRecurso,
        idCliente: idCliente,
        direccion: this.denuncia.direccion,
        celular: this.denuncia.celular,
        email: this.denuncia.email,
        idEO: this.denuncia.idEO,
        idServicio: this.denuncia.idServicio,
        idMateria: this.denuncia.idMateria,
        idDitrito: this.denuncia.idDitrito
      }
      this.s_getDenuncias = this.apollo.mutate({
        mutation: CREATE_DENUNCIA,
        variables: variable
      }).subscribe((data) => {
        this.router.navigate(['/denuncias']);
      })
    }
  }

  openDialogEmpresaOperadora(): void {
    const dialogRef = this.dialog.open(DialogElegirEoComponent, {
      width: '340px',
      height: 'max-content',
      data: { id: null, nombre: null },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (typeof (result) != 'undefined') {
        this.denuncia.idEO = result.id;
        this.eo.nombre = result.nombre;
      }
    });
  }

  openDialogMateria(): void {
    const dialogRef = this.dialog.open(DialogElegirMateriaComponent, {
      width: '340px',
      height: 'max-content',
      data: { id: null, nombre: null },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (typeof (result) != 'undefined') {
        this.denuncia.idMateria = result.id;
        this.materia.nombre = result.nombre;
      }
    });
  }

  seleccionarRecurso(e: any) {
    this.denuncia.idRecurso = e.id;
  }

  seleccionarDistrito(e: any) {
    this.denuncia.idDitrito = e;
  }

  seleccionarServicio(e: any) {
    this.denuncia.idServicio = e.id;
  }

  ngOnDestroy() {
    if (typeof (this.s_getDenuncias) != 'undefined') this.s_getDenuncias.unsubscribe();
  }

}
