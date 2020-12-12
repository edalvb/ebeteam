import { Component, Output, OnDestroy, EventEmitter } from '@angular/core';
import * as ubicacionQL from "../../../graphql/ubicacion";
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-oficina-eo',
  templateUrl: './oficina-eo.component.html',
  styleUrls: ['./oficina-eo.component.css']
})
export class OficinaEoComponent implements OnDestroy {
  @Output() idDistrito = new EventEmitter;

  idDepa: any = 0;
  idProv: any = 0;
  idDist: any = 0;

  departamentos: any;     // variable que almacenará al array que recuperes del backend
  provincias: any;        // variable que almacenará al array que recuperes del backend
  distritos: any;         // variable que almacenará al array que recuperes del backend

  s_departamentos: Subscription;  // variable que almacenará la observable la recuperación asíncrona de información
  s_provincias: any;              // variable que almacenará la observable la recuperación asíncrona de información
  s_distritos: any;               // variable que almacenará la observable la recuperación asíncrona de información

  constructor(private apollo: Apollo) {
    this.s_departamentos = this.apollo
      .watchQuery({
        query: ubicacionQL.GET_DEPARTAMENTOS,
      })
      .valueChanges.subscribe(({ data }) => {
        let dato: any = data;
        this.departamentos = dato.departamentos
      });
  }

  getProvincias() {
    this.provincias = null;
    this.distritos = null;
    console.log("Estoy en getProvincias")
    this.s_provincias = this.apollo.watchQuery({
      query: ubicacionQL.GET_PROVINCIAS_X_DEPARTAMENTO,
      variables: {
        idDep: this.idDepa
      }
    }).valueChanges.subscribe(({ data }) => {
      let dato: any = data;
      this.provincias = dato.provincias;
    })
  }

  getDistritos() {
    this.s_distritos = this.apollo.watchQuery({
      query: ubicacionQL.GET_DISTRITOS_X_PROVINCIA,
      variables: {
        idPro: this.idProv
      }
    }).valueChanges.subscribe(({ data }) => {
      let dato: any = data;
      this.distritos = dato.distritos;
    })
  }

  getCentrosAtencion() {
    this.idDistrito.emit(this.idDist);
  }

  ngOnDestroy(): void {
    this.s_departamentos ? this.s_departamentos.unsubscribe() : null;
    this.s_provincias ? this.s_provincias.unsubscribe() : null;
    this.s_distritos ? this.s_distritos.unsubscribe() : null;
    this.idDistrito.unsubscribe();
  }

}

