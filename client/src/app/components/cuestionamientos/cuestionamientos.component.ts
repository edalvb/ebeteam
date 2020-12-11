import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import { PersonaDni } from 'src/app/modelo/persona';

export interface PeriodicElement {
  fecha: string;
  imei: string;
  operadora: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    fecha: '19/08/2020',
    imei: '13254664544453435',
    operadora: 'Movistar'
  },
  {
    fecha: '10/08/2020',
    imei: '03254664544453435',
    operadora: 'Claro'
  }
];


@Component({
  selector: 'app-cuestionamientos',
  templateUrl: './cuestionamientos.component.html',
  styleUrls: ['./cuestionamientos.component.css']
})
export class CuestionamientosComponent {

  confirm: boolean = false;
  persona_dni: PersonaDni = {
    cui: '',
    dni: '',
    first_name: '',
    last_name: '',
    name: ''
  };
  displayedColumns: string[] = ['fecha', 'imei', 'operadora', 'actions'];
  dataSource = ELEMENT_DATA;

  funAlmacenar(e: any) {
    this.confirm = e;
  }

  funPersona(e: any) {
    this.persona_dni = e;
  }
  
}