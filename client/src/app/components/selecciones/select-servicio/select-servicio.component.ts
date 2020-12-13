import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Servicio } from 'src/app/modelo/denuncia';
import * as denunciaQL from "../../../graphql/denuncia";
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-servicio',
  templateUrl: './select-servicio.component.html',
  styleUrls: ['./select-servicio.component.css']
})
export class SelectServicioComponent implements OnInit, OnDestroy {

  @Output() servicioSeleccionado = new EventEmitter;

  s_servicio!: Subscription;

  servicios: any;

  servicio: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.s_servicio = this.apollo
      .watchQuery({
        query: denunciaQL.GET_SERVICIOS,
      })
      .valueChanges.subscribe(({ data }) => {
        console.log(data);
        let dato: any = data;
        this.servicios = dato.servicios
      });
  }

  seleccionarServicio() {
    let serv: Servicio = {
      id: this.servicio.id,
      nombre: this.servicio.nombre
    }
    this.servicioSeleccionado.emit(serv);
  }

  ngOnDestroy() {
    this.s_servicio.unsubscribe();
  }

}
