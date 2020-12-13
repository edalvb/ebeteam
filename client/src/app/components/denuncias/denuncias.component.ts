import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaDni } from 'src/app/modelo/persona';
import { FormDenunciaComponent } from './form-denuncia/form-denuncia.component';
import { GET_DENUNCIA_X_CLIENTE } from "../../graphql/denuncia";
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Denuncia1 } from "../../modelo/denuncia";

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class DenunciasComponent implements OnInit {

  confirm: boolean = false;
  persona_dni: PersonaDni = {
    cui: '',
    dni: '',
    first_name: '',
    last_name: '',
    name: ''
  };

  s_denuncia!: Subscription;

  denuncias!: Denuncia1[];

  denuncia: any;

  dataSource: any;

  displayedColumns: string[] = ['materia_denuncia', 'enre', 'servicio', 'estado_denuncia'];
  expandedElement!: Denuncia1 | null;

  constructor(private dialog: MatDialog, private apollo: Apollo) { }

  ngOnInit(): void {
    if (this.estaLogueado()) {

      let session: any = sessionStorage.getItem('usuario');
      let idCliente = JSON.parse(session).id;

      this.s_denuncia = this.apollo
        .watchQuery({
          query: GET_DENUNCIA_X_CLIENTE,
          variables: {
            idCliente: idCliente
          }
        })
        .valueChanges.subscribe(({ data }) => {
          let dato: any = data;
          this.denuncias = dato.cliente.denuncias
          console.log(this.denuncias);
          this.dataSource = new MatTableDataSource(this.denuncias);
        });

    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  funAlmacenar(e: any) {
    this.confirm = e;
  }

  funPersona(e: any) {
    this.persona_dni = e;
  }

  onCreate() {
    this.dialog.open(FormDenunciaComponent, {
      width: "100%",
      height: "max-content",
      disableClose: true,
      data: {
        dni: this.persona_dni.dni,
        nombre: this.persona_dni.name,
        paterno: this.persona_dni.first_name,
        materno: this.persona_dni.last_name
      }
    });
  }

  estaLogueado(): boolean {
    return sessionStorage.getItem('usuario') != null;
  }

}
