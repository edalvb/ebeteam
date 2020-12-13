import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Recurso } from "../../../modelo/denuncia";
import * as denunciaQL from "../../../graphql/denuncia";
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-recurso',
  templateUrl: './select-recurso.component.html',
  styleUrls: ['./select-recurso.component.css']
})
export class SelectRecursoComponent implements OnInit, OnDestroy {

  @Output() recursoSeleccionado = new EventEmitter;

  s_recurso!: Subscription;

  recursos: any;

  recurso: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.s_recurso = this.apollo
      .watchQuery({
        query: denunciaQL.GET_RECURSOS,
      })
      .valueChanges.subscribe(({ data }) => {
        let dato: any = data;
        this.recursos = dato.recursoDenuncias
      });
  }

  seleccionarRecurso() {
    let recur: Recurso = {
      id: this.recurso.id,
      nombre: this.recurso.nombre
    }
    this.recursoSeleccionado.emit(recur);
  }

  ngOnDestroy() {
    this.s_recurso.unsubscribe();
  }

}
