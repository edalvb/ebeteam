import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { CanalAtencionOsiptel } from "../../../modelo/osiptel";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCanalDesOsiptelComponent } from "../../dialog/dialog-canal-des-osiptel/dialog-canal-des-osiptel.component";

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
      sanitizer.bypassSecurityTrustResourceUrl(`assets/img/${nombre}.svg`));
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogCanalDesOsiptelComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
