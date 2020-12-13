import { Component, OnInit } from '@angular/core';
import { Materia, Servicio } from 'src/app/modelo/denuncia';

@Component({
  selector: 'app-select-servicio',
  templateUrl: './select-servicio.component.html',
  styleUrls: ['./select-servicio.component.css']
})
export class SelectServicioComponent implements OnInit {

  servSeleccionado!: string;


  serv: Servicio[]=[
    {
      id: '1',
      nombre:'Telefonía Movil'
    },
    {
      id: '2',
      nombre:'Telefonía Fija'
    },
    {
      id: '3',
      nombre:'Internet'
    }
  ]

  tMovil: Materia[]=[
    {
      id: '1',
      nombre:'Cobro del Servicio'
    },
    {
      id: '2',
      nombre:'Instalación o activación del servicio'
    },
    {
      id: '3',
      nombre:'Suspensión o corte del servicio'
    },
    {
      id: '4',
      nombre:'Calidad o idoneidad en la prestación del servicio'
    },
    {
      id: '5',
      nombre:'Falta de entrega del recibo o de la copia del recibo solicitada por el usuario'
    },
    {
      id: '6',
      nombre:'Otros'
    }
  ]

  internet: Materia[]=[
    {
      id: '1',
      nombre:'Cobro del Servicio'
    },
    {
      id: '2',
      nombre:'Instalación o activación del servicio'
    }
  ]
  tFija: Materia[]=[
    {
      id: '1',
      nombre:'Cobro del Servicio'
    },
    {
      id: '2',
      nombre:'Instalación o activación del servicio'
    },
    {
      id: '3',
      nombre:'Traslado del servicio'
    },
    {
      id: '4',
      nombre:'Suspensión o corte del servicio'
    },
    {
      id: '5',
      nombre:'Calidad o idoneidad en la prestación del servicio'
    },
    {
      id: '6',
      nombre:'Falta de entrega del recibo o de la copia del recibo solicitada por el usuario'
    },
    {
      id: '7',
      nombre:'Otros'
    }
  ]

  mat!: Materia[];
  constructor() { }

  select(e: any){
    this.servSeleccionado = e;
    if(this.servSeleccionado == '1'){
      this.mat = this.tMovil;
    }
    if (this.servSeleccionado == '2') {
      this.mat = this.tFija;
    } 
    if (this.servSeleccionado == '3') {
      this.mat = this.internet;
    }

  }

  ngOnInit(){
    
  }

}
