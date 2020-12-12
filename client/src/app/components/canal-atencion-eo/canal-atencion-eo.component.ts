import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogCanalDesEoComponent } from '../dialog/dialog-canal-des-eo/dialog-canal-des-eo.component';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
    this.agregarIcono('movistar', iconRegistry, sanitizer);
    this.agregarIcono('claro', iconRegistry, sanitizer);
    this.agregarIcono('bitel', iconRegistry, sanitizer);
    this.agregarIcono('entel', iconRegistry, sanitizer);
  }

  ngOnInit(): void { }

  agregarIcono(nombre: string, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      nombre,
      sanitizer.bypassSecurityTrustResourceUrl(`/assets/img/${nombre}.svg`));
  }

  openDialog(): void {

    this.dialog.open(DialogCanalDesEoComponent, {
      disableClose: true,
      width: '900px',
      height: '500px',

    });

  }
}
