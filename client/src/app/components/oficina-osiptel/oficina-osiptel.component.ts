import { Component, OnInit } from '@angular/core';
import { OficinaOsiptel } from "../../modelo/oficina";

@Component({
  selector: 'app-oficina-osiptel',
  templateUrl: './oficina-osiptel.component.html',
  styleUrls: ['./oficina-osiptel.component.css']
})
export class OficinaOsiptelComponent implements OnInit {

  panelOpenState = false;

  oficinas: OficinaOsiptel[] = [
    {
      departamento: 'Lima',
      nombre: 'CO Huacho',
      tipo: 'CO',
      direccion: 'Calle Colón N°150, plaza de armas de Huacho',
      telefono: '01- 7380942',
      celular1: '940722140',
      celular2: '',
      email: 'cohuacho@osiptel.gob.pe',
      horario: '8:30 am - 5:30 pm'
    },
    {
      departamento: 'Lima',
      nombre: 'CO Lima - Cercado',
      tipo: 'CO',
      direccion: 'Av. Bolivia N°380-Cercado de Lima',
      telefono: '01-4251435',
      celular1: '962381787',
      celular2: '',
      email: '',
      horario: '8:30 am - 5:30 pm'
    },
    {
      departamento: 'Lima',
      nombre: 'CO Lima - Norte',
      tipo: 'CO',
      direccion: 'Av. Las Palmeras N° 3901 - Los Olivos',
      telefono: '01-5215781',
      celular1: '991941751',
      celular2: '',
      email: '',
      horario: '8:30 am - 5:30 pm'
    },
    {
      departamento: 'Lima',
      nombre: 'CO Lima - Este',
      tipo: 'CO',
      direccion: 'Av. Pirámide del Sol N° 428 - Urb. Zárate - San Juan de Lurigancho',
      telefono: '01- 2761768',
      celular1: '961271298',
      celular2: '',
      email: '',
      horario: '8:30 am - 5:30 pm'
    },
    {
      departamento: 'Lima',
      nombre: 'CO Lima - Sur',
      tipo: 'CO',
      direccion: 'Proximamente en el MAC Lima Sur',
      telefono: ' ',
      celular1: '961271362',
      celular2: '',
      email: '',
      horario: '8:30 am - 5:30 pm'
    },
    {
      departamento: 'Lima',
      nombre: 'CO Lima - Callao',
      tipo: 'CO',
      direccion: 'Av. Saénz Peña 199 - Callao',
      telefono: '01- 4292912',
      celular1: '980413247',
      celular2: '',
      email: '',
      horario: '8:30 am - 5:30 pm'
    },
    {
      departamento: 'Lima',
      nombre: 'Oficina San Borja',
      tipo: 'CO',
      direccion: 'Calle De la Prosa 136 - San Borja',
      telefono: ' ',
      celular1: '942739628',
      celular2: '',
      email: '',
      horario: '8:30 am - 5:30 pm'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
