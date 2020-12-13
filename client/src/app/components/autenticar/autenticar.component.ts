import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaDni } from '../../modelo/persona';
import { PersonaDniService } from '../../servicio/persona-dni.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as clienteQL from "../../graphql/cliente";
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent {
  persona_dni: PersonaDni = {
    cui: '',
    dni: '',
    first_name: '',
    last_name: '',
    name: ''
  };

  idCliente: any;

  s_servicio!: Subscription;

  @Input('link') link = '/home';
  @Output() confirm = new EventEmitter;
  @Output() setpersona = new EventEmitter;

  constructor(private persona: PersonaDniService, private _snackBar: MatSnackBar, private apollo: Apollo) { }

  getpersona() {
    this.persona.getPersonaDni(this.persona_dni.dni).subscribe((res: any) => {
      if (res.cui == this.persona_dni.cui) {

        console.log('asda');

        this.s_servicio = this.apollo
          .watchQuery({
            query: clienteQL.GET_CLIENTE,
            variables: {
              dni: res.dni
            }
          })
          .valueChanges.subscribe(({ data }) => {
            let dato: any = data;

            // Si no existe ese cliente
            if (dato.clientes.length == 0) {
              // Creo un nuevo cliente
              this.apollo.mutate({
                mutation: clienteQL.CREATE_CLIENTE_SOLO_DNI,
                variables: {
                  dni: res.dni,
                  name: `${res.name} ${res.first_name} ${res.last_name}`,
                }
              }).subscribe(({ data }) => {
                //Guardo en el localStorage
                let idC: any = data;
                res.id = idC.createCliente.cliente.id;
                this.guardarCliente(res);
              })
              //Guardo en el localStorage
            } else {
              let idC: any = data;
              res.id = idC.clientes[0].id;
              this.guardarCliente(res);
            }
          });


      } else {
        this.confirm.emit(false);
        this._snackBar.open("Los datos no corresponden al DNI", "Incorrecto", { duration: 2000 });
      }
    });
  }

  guardarCliente(res: any) {
    sessionStorage.setItem('usuario', JSON.stringify(res));
    this.setpersona.emit(res);
    this.confirm.emit(true);
  }

}
