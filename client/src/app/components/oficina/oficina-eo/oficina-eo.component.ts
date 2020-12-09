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

  oficinas: OficinaEo[] = [
    {
      distrito: 'Lima',
      direccion: 'Calle Colón N°150, plaza de armas de Huacho',
      horario: '8:30 am - 5:30 pm'
    },
    {
      distrito: 'Lima',
      horario: '8:30 am - 5:30 pm'
    },
    {
      distrito: 'Lima',
      horario: '8:30 am - 5:30 pm'
    },
    {
      distrito: 'Lima',
      direccion: 'Av. Pirámide del Sol N° 428 - Urb. Zárate - San Juan de Lurigancho',
      horario: '8:30 am - 5:30 pm'
    },
    {
      distrito: 'Lima',
      direccion: 'Proximamente en el MAC Lima Sur',
      horario: '8:30 am - 5:30 pm'
    },
    {
      distrito: 'Lima',
      direccion: 'Av. Saénz Peña 199 - Callao',
      horario: '8:30 am - 5:30 pm'
    },
    {
      distrito: 'Lima',
      direccion: 'Calle De la Prosa 136 - San Borja',
      horario: '8:30 am - 5:30 pm'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

