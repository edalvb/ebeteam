import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { CanalAtencionOsiptel } from "../../../modelo/osiptel";

@Component({
  selector: 'app-canal-atencion-osiptel',
  templateUrl: './canal-atencion-osiptel.component.html',
  styleUrls: ['./canal-atencion-osiptel.component.css']
})
export class CanalAtencionOsiptelComponent implements OnInit {

  canales: CanalAtencionOsiptel[] = [
    {
      nombre: 'Presencial',
      icono: 'presencial'
    },
    {
      nombre: 'Redes Sociales',
      icono: 'redes_sociales'
    },
    {
      nombre: 'Web',
      icono: 'web'
    },
    {
      nombre: 'Telefónico',
      icono: 'telefonico'
    },
    {
      nombre: 'Electrónico',
      icono: 'electronico'
    },
    {
      nombre: 'Programas Radiales',
      icono: 'radial'
    },
  ]

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.agregarIcono('presencial', iconRegistry, sanitizer);
    this.agregarIcono('redes_sociales', iconRegistry, sanitizer);
    this.agregarIcono('web', iconRegistry, sanitizer);
    this.agregarIcono('telefonico', iconRegistry, sanitizer);
    this.agregarIcono('electronico', iconRegistry, sanitizer);
    this.agregarIcono('radial', iconRegistry, sanitizer);
  }

  ngOnInit(): void { }

  agregarIcono(nombre: string, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      nombre,
      sanitizer.bypassSecurityTrustResourceUrl(`assets/img/${nombre}.svg`));
  }

}
