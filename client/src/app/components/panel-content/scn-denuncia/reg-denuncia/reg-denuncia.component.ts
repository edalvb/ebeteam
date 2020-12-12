import { Component, OnInit } from '@angular/core';
import { EmpresaOperadora, Materia, Recurso, Servicio } from 'src/app/modelo/denuncia';

@Component({
  selector: 'app-reg-denuncia',
  templateUrl: './reg-denuncia.component.html',
  styleUrls: ['./reg-denuncia.component.css']
})
export class RegDenunciaComponent implements OnInit {

  eos: EmpresaOperadora[] = [
    {
      id: '1',
      nombre: 'Telfónica'
    },
    {
      id: '2',
      nombre: 'Claro'
    },
    {
      id: '3',
      nombre: 'Bitel'
    }
  ]

  servs: Servicio[] = [
    {
      id: '1',
      nombre: 'Telefonía Movil'
    },
    {
      id: '2',
      nombre: 'Telefonía Fija'
    },
    {
      id: '3',
      nombre: 'Servicios Empaquetados'
    },
    {
      id: '4',
      nombre: 'TV Cable'
    },
  ]

  mats: Materia[] = [
    {
      id: '1',
      nombre: 'Facturación'
    },
    {
      id: '2',
      nombre: 'Cobro del servicio'
    },
    {
      id: '3',
      nombre: 'Calidad o idoneidad en la prestación del servicio'
    },
    {
      id: '4',
      nombre: 'Veracidad de la información brindada por la empresa operadora al usuario'
    }
  ]

  recs: Recurso[] = [
    {
      id: '1',
      nombre: 'Incumplimiento de resolución de primera instancia'
    },
    {
      id: '2',
      nombre: 'SARA'
    },
    {
      id: '3',
      nombre: 'Incumplimiento de aplicación de SAR'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
