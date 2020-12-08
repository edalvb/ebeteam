import { Component, OnInit } from '@angular/core';

export interface Denuncia {
  atributo: string;
  descripcion: string;
}

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css']
})
export class DenunciasComponent implements OnInit {

  denuncias: Denuncia[] = [
    {
      atributo: 'Sede',
      descripcion: 'Los Olivos ',
    },
    {
      atributo: 'N° Denuncia',
      descripcion: '001-2019-LN/DEN',
    },
    {
      atributo: 'Fecha Presentación',
      descripcion: '8/01/2019',
    },
    {
      atributo: 'Empresa Operadora',
      descripcion: 'TELEFÓNICA DEL PERÚ S.A.A.',
    },
    {
      atributo: 'Recurso',
      descripcion: 'Incumplimiento de resolución de primera instancia',
    },
    {
      atributo: 'Servicio',
      descripcion: 'Servicios empaquetados',
    },
    {
      atributo: 'Estado',
      descripcion: 'CONCLUIDO',
    },
    {
      atributo: 'Materia',
      descripcion: 'Derechos reconocidos',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
