import { Component, OnDestroy, OnChanges, Input } from '@angular/core';
import * as eoQL from "../../../../graphql/eo";
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-descripcion-eo',
  templateUrl: './descripcion-eo.component.html',
  styleUrls: ['./descripcion-eo.component.css']
})
export class DescripcionEoComponent implements OnDestroy, OnChanges {
  @Input('idEO') idEO = 0;
  @Input('idDist') idDist = 0;

  centros_atencion: any;

  s_centros_atencion: any;        // variable que almacenará la observable la recuperación asíncrona de información

  constructor(private apollo: Apollo) { }

  ngOnChanges() {
    this.s_centros_atencion = this.apollo.watchQuery({
      query: eoQL.GET_CENTROS_ATENCION_X_DISTRITO,
      variables: {
        idEO: this.idEO,
        idDis: this.idDist
      }
    }).valueChanges.subscribe(({ data }) => {
      let dato: any = data;
      this.centros_atencion = dato.distritos;
    })
  }

  ngOnDestroy(): void {
    this.s_centros_atencion ? this.s_centros_atencion.unsubscribe() : null;
  }

}
