import { Component, OnInit } from '@angular/core';
import { CanalAtencionOsiptel } from "../../modelo/osiptel";

@Component({
  selector: 'app-canal-atencion-osiptel',
  templateUrl: './canal-atencion-osiptel.component.html',
  styleUrls: ['./canal-atencion-osiptel.component.css']
})
export class CanalAtencionOsiptelComponent implements OnInit {

  canales: CanalAtencionOsiptel[] = [
    {
      nombre: 'Presencial',
      descripcion1: 'Mediante sistema de citas en el periodo actual.',
      descripcion2: 'Son las atenciones presenciales, que actualmente se realizan previa cita en la Oficina de San Borja y a partir del 02 de Noviembre en las Oficinas Regionales de Arequipa, Cusco, La Libertad y Lambayeque.'
    },
    {
      nombre: 'Facebook',
      descripcion1: 'https://www.facebook.com'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
