import { Component, OnInit } from '@angular/core';
import { OficinaEo } from "../../../modelo/denuncia";
import { Departamento } from "../../../modelo/ubicacion";
import { Provincia } from "../../../modelo/ubicacion";
import { Distrito } from "../../../modelo/ubicacion";

@Component({
  selector: 'app-oficina-eo',
  templateUrl: './oficina-eo.component.html',
  styleUrls: ['./oficina-eo.component.css']
})
export class OficinaEoComponent implements OnInit {

  panelOpenState = false;

  departamentos: Departamento[] = [
    {
      id: '2',
      codigo: '01',
      nombre: 'Amazonas',
    },
    {
      id: '2',
      codigo: '02',
      nombre: 'Lambayeque'
    }
  ]

  provincias: Provincia[] = [
    {
      id: '2',
      codigo: '01',
      nombre: 'Bagua',
    },
    {
      id: '2',
      codigo: '02',
      nombre: 'Chiclayo'
    }
  ]

  distritos: Distrito[] = [
    {
      id: '2',
      codigo: '01',
      nombre: 'Bagua',
    },
    {
      id: '2',
      codigo: '02',
      nombre: 'Chiclayo'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

