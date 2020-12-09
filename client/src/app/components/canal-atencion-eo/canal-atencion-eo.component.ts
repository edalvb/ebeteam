import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
// import { Util } from "../../util/util";

@Component({
  selector: 'app-canal-atencion-eo',
  templateUrl: './canal-atencion-eo.component.html',
  styleUrls: ['./canal-atencion-eo.component.css']
})
export class CanalAtencionEoComponent implements OnInit {

  canales = [
    {
      nombre: 'Movistar',
      icono: 'movistar'
    },
    {
      nombre: 'Claro',
      icono: 'claro'
    },
    {
      nombre: 'Bitel',
      icono: 'bitel'
    },
    {
      nombre: 'Entel',
      icono: 'entel'
    },
  ]

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.agregarIcono('movistar', iconRegistry, sanitizer);
    this.agregarIcono('claro', iconRegistry, sanitizer);
    this.agregarIcono('bitel', iconRegistry, sanitizer);
    this.agregarIcono('entel', iconRegistry, sanitizer);
  }

  ngOnInit(): void { }

  agregarIcono(nombre: string, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      nombre,
      //bitel.svg
      sanitizer.bypassSecurityTrustResourceUrl(`https://ebeteam.s3.us-east-2.amazonaws.com/assets/img/${nombre}.svg`));
  }

}