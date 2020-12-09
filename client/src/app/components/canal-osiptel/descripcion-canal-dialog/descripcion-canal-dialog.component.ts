import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descripcion-canal-dialog',
  templateUrl: './descripcion-canal-dialog.component.html',
  styleUrls: ['./descripcion-canal-dialog.component.css']
})
export class DescripcionCanalDialogComponent implements OnInit {
  @Input('descripcion') descripcion: String = 'Las atenciones presenciales, que actualmente se realizan previa cita en la Oficina de San Borja y a partir del 02 de Noviembre en las Oficinas Regionales de Arequipa, Cusco, La Libertad y Lambayeque';

  constructor() { }

  ngOnInit(): void {
  }

}
