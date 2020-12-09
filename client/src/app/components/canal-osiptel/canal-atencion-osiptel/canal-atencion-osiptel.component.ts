import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { CanalAtencionOsiptel } from "../../../modelo/osiptel";
import { MatDialog } from '@angular/material/dialog';
import { DialogCanalDesOsiptelComponent } from "../../dialog/dialog-canal-des-osiptel/dialog-canal-des-osiptel.component";
import { DialogCanalPresDesOsiptelComponent } from "../../dialog/dialog-canal-pres-des-osiptel/dialog-canal-pres-des-osiptel.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-canal-atencion-osiptel',
  templateUrl: './canal-atencion-osiptel.component.html',
  styleUrls: ['./canal-atencion-osiptel.component.css']
})
export class CanalAtencionOsiptelComponent implements OnInit {

  // dialog: any;

  animal: string = '';
  name: string = '';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
    this.agregarIcono('presencial', iconRegistry, sanitizer);
    this.agregarIcono('redes_sociales', iconRegistry, sanitizer);
    this.agregarIcono('web', iconRegistry, sanitizer);
    this.agregarIcono('telefonico', iconRegistry, sanitizer);
    this.agregarIcono('electronico', iconRegistry, sanitizer);
    this.agregarIcono('radial', iconRegistry, sanitizer);

    // this.dialog = new DialogCanalDesOsiptelComponent();
  }

  ngOnInit(): void { }

  agregarIcono(nombre: string, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      nombre,
      sanitizer.bypassSecurityTrustResourceUrl(`https://ebeteam.s3.us-east-2.amazonaws.com/assets/img/${nombre}.svg`));
  }

  openDialogDescripcion(): void {

    const dialogRef = this.dialog.open(DialogCanalDesOsiptelComponent, {
      width: '600px',
      height: '500px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialogPresencial(): void {

    const dialogRef = this.dialog.open(DialogCanalPresDesOsiptelComponent, {
      width: '1000px',
      height: '500px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
