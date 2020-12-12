import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaDni } from 'src/app/modelo/persona';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
  fecha: string;
  imei: string;
  operadora: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    fecha: '19/08/2020',
    imei: '13254664544453435',
    operadora: 'Movistar',
    estado: 'ATENDIDO'
  },
  {
    fecha: '10/08/2020',
    imei: '03254664544453435',
    operadora: 'Claro',
    estado: 'EN TRAMITE'
  }
];


@Component({
  selector: 'app-cuestionamientos',
  templateUrl: './cuestionamientos.component.html',
  styleUrls: ['./cuestionamientos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
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
  displayedColumns: string[] = ['fecha', 'imei', 'operadora'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  expandedElement!: PeriodicElement | null;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  funAlmacenar(e: any) {
    this.confirm = e;
  }

  funPersona(e: any) {
    this.persona_dni = e;
  }
  
}