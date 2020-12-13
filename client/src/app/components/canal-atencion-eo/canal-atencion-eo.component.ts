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
      id: '1',
      nombre: 'Movistar',
      icono: 'movistar'
    },
    {
      id: '2',
      nombre: 'Claro',
      icono: 'claro'
    },
    {
      id: '3',
      nombre: 'Bitel',
      icono: 'bitel'
    },
    {
      id: '4',
      nombre: 'Entel',
      icono: 'entel'
    },
  ]

  public child!: string;
  operadora!: string;

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

  funChild(e: any){
    this.child=e.id;
    this.operadora = e.icono;
  }
}
