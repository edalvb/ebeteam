import { Component, OnDestroy } from '@angular/core';
import { OficinaOsiptel } from "../../../modelo/osiptel";
import * as ubicacionQL from "../../../graphql/ubicacion";
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-oficina-osiptel',
  templateUrl: './oficina-osiptel.component.html',
  styleUrls: ['./oficina-osiptel.component.css']
})
export class OficinaOsiptelComponent implements OnDestroy {

  panelOpenState = false;

  departamentos: any;

  oficinas: OficinaOsiptel[] = [];

  private qSubDepartamento: Subscription;

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

  ngOnDestroy() {
    this.qSubDepartamento.unsubscribe();
  }

}
