import { Component, OnDestroy } from '@angular/core';
import * as ubicacionQL from "../../../graphql/ubicacion";
import * as osiptelQL from "../../../graphql/osiptel";
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-oficina-osiptel',
  templateUrl: './oficina-osiptel.component.html',
  styleUrls: ['./oficina-osiptel.component.css']
})
export class OficinaOsiptelComponent implements OnDestroy {

  idDepa: any = 1;

  panelOpenState = false;

  departamentos: any;

  oficinas: any;
  lugar: any;

  ofSelect!: any;

  private qSubDepartamento: Subscription;
  private qSubSede: any;

  constructor(private apollo: Apollo) {
    this.qSubDepartamento = this.apollo
      .watchQuery({
        query: ubicacionQL.GET_DEPARTAMENTOS,
      })
      .valueChanges.subscribe(({ data }) => {
        let dato: any = data;
        this.departamentos = dato.departamentos
      });
  }

  getSedes() {
    this.qSubSede = this.apollo.watchQuery({
      query: osiptelQL.GET_SEDES_X_DEPARTAMENTO,
      variables: {
        ide: this.idDepa
      }
    }).valueChanges.subscribe(({ data }) => {
      let dato: any = data;
      this.oficinas = dato.departamento.sedes;
    })
  }

  ngOnDestroy() {
    this.qSubDepartamento.unsubscribe();
    this.qSubSede ? this.qSubSede.unsubscribe() : "";
  }

}
