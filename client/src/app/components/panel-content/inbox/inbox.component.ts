import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface Inbox {
  fecha: string;
  denuncia: string;
  operadora: string;
  recurso: string;
  servicio: string;
  materia: string;
  estado: string;
}

const ELEMENT_DATA: Inbox[] = [
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
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  panelOpenState = false;
  displayedColumns: string[] = ['fecha', 'denuncia', 'operadora', 'estado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  expandedElement!: Inbox | null;

}
