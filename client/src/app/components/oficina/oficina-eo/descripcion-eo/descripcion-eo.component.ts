import { Component, OnInit } from '@angular/core';
import { EmpresaOperadora } from "../../../../modelo/operadora";

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-descripcion-eo',
  templateUrl: './descripcion-eo.component.html',
  styleUrls: ['./descripcion-eo.component.css']
})
export class DescripcionEoComponent implements OnInit {

  empresaoperadora: EmpresaOperadora[] = [
    {
      direccion: 'CALLE ANDRÉS AVELINO CÁCERES 222 LC -148',
      horario: 'Lunes a Sábado',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
