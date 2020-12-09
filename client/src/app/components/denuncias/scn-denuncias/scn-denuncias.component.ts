import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormDenunciaComponent } from '../form-denuncia/form-denuncia.component';

export interface PeriodicElement {
  fecha: string;
  ndenuncia: string;
  operadora: string;
  recurso: string;
  servicio: string;
  materia: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { fecha: '08/01/2019', ndenuncia: '001-2019-LN/DEN', operadora: 'TELEFÓNICA DEL PERÚ S.A.A.', recurso: 'Incumplimiento de resolución de primera instancia', servicio: 'Servicios empaquetados', materia: 'Derechos reconocidos', estado: 'CONCLUIDO' },
  { fecha: '08/01/2019', ndenuncia: '001-2019-LN/DEN', operadora: 'TELEFÓNICA DEL PERÚ S.A.A.', recurso: 'Incumplimiento de resolución de primera instancia', servicio: 'Servicios empaquetados', materia: 'Derechos reconocidos', estado: 'CONCLUIDO' },

];

@Component({
  selector: 'app-scn-denuncias',
  templateUrl: './scn-denuncias.component.html',
  styleUrls: ['./scn-denuncias.component.css']
})
export class ScnDenunciasComponent implements OnInit {
  confirm: boolean = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  panelOpenState = false;
  displayedColumns: string[] = ['fecha', 'ndenuncia', 'operadora', 'recurso', 'servicio', 'materia', 'estado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  funAlmacenar(e: any) {
    this.confirm = e;
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(FormDenunciaComponent);
  }

}
