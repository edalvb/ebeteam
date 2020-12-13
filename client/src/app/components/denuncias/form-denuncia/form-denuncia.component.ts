import { Component } from '@angular/core';
import { EmpresaOperadora, Materia, Recurso, Servicio } from 'src/app/modelo/denuncia';
import { MatDialog } from '@angular/material/dialog';
import { DialogElegirEoComponent } from "../../dialog/dialog-elegir-eo/dialog-elegir-eo.component";

@Component({
  selector: 'app-form-denuncia',
  templateUrl: './form-denuncia.component.html',
  styleUrls: ['./form-denuncia.component.css']
})

export class FormDenunciaComponent {

  nombre: String;
  dni: String;
  paterno: String;
  materno: String;

  autorizo: boolean = false;

  eo = { id: null, nombre: null };

  servs: Servicio[] = [
    {
      id: '1',
      nombre: 'Telefonía Movil'
    },
    {
      id: '2',
      nombre: 'Telefonía Fija'
    },
    {
      id: '3',
      nombre: 'Servicios Empaquetados'
    },
    {
      id: '4',
      nombre: 'TV Cable'
    },
  ]

  mats: Materia[] = [
    {
      id: '1',
      nombre: 'Facturación'
    },
    {
      id: '2',
      nombre: 'Cobro del servicio'
    },
    {
      id: '3',
      nombre: 'Calidad o idoneidad en la prestación del servicio'
    },
    {
      id: '4',
      nombre: 'Veracidad de la información brindada por la empresa operadora al usuario'
    }
  ]

  recs: Recurso[] = [
    {
      id: '1',
      nombre: 'Incumplimiento de resolución de primera instancia'
    },
    {
      id: '2',
      nombre: 'SARA'
    },
    {
      id: '3',
      nombre: 'Incumplimiento de aplicación de SAR'
    }
  ]
  constructor(public dialog: MatDialog) {
    let persona = JSON.parse(sessionStorage.getItem('usuario') as string);
    this.dni = persona.dni;
    this.nombre = persona.name;
    this.paterno = persona.first_name;
    this.materno = persona.last_name;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogElegirEoComponent, {
      width: '340px',
      height: 'max-content',
      data: { name: 'this.name', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.nombre = result;
    });
  }


}
