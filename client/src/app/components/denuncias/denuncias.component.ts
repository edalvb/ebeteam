import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaDni } from 'src/app/modelo/persona';
import { FormDenunciaComponent } from './form-denuncia/form-denuncia.component';

export interface PeriodicElement {
  fecha: string;
  denuncia: string;
  operadora: string;
  recurso: string;
  servicio: string;
  materia: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    fecha: '08/01/2019',
    denuncia: '001-2019-LN/DEN',
    operadora: 'TELEFÓNICA DEL PERÚ S.A.A.',
    recurso: 'Incumplimiento de resolución de primera instancia',
    servicio: 'Servicios empaquetados',
    materia: 'Derechos reconocidos',
    estado: 'CONCLUIDO'
  },
  {
    fecha: '08/01/2019',
    denuncia: '001-2019-LN/DEN',
    operadora: 'TELEFÓNICA DEL PERÚ S.A.A.',
    recurso: 'Incumplimiento de resolución de primera instancia',
    servicio: 'Servicios empaquetados',
    materia: 'Derechos reconocidos',
    estado: 'CONCLUIDO'
  }
];

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class DenunciasComponent implements OnInit {

  confirm: boolean = false;
  persona_dni: PersonaDni = {
    cui: '',
    dni: '',
    first_name: '',
    last_name: '',
    name: ''
  };

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.estaLogueado();
  }

  panelOpenState = false;
  displayedColumns: string[] = ['fecha', 'denuncia', 'operadora', 'estado'];
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

  onCreate() {
    const dialogRef = this.dialog.open(FormDenunciaComponent, {
      width: "100%",
      height: "max-content",
      disableClose: true,
      data: {
        dni: this.persona_dni.dni,
        nombre: this.persona_dni.name,
        paterno: this.persona_dni.first_name,
        materno: this.persona_dni.last_name
      }
    });
  }

  estaLogueado(): boolean {
    return sessionStorage.getItem('usuario') != null;
  }

}
