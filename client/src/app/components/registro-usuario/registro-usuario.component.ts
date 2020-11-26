import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { map } from "rxjs/operators";

const GET_CLIENTES = gql`
  query {
    clientes{
      name,
      id,
      last_name
    }
  }
`;
const CREATE_CLIENTES = gql`
  mutation crearcliente(
      $dni: String!,
      $name: String!,
      $last_name: String!,
      $cellphone: String!,
      $imei: String!) {
    createCliente(input: {
      data: {
        dni: $dni,
        name: $name,
        last_name: $last_name,
        cellphone: $cellphone,
        imei: $imei
      }
    }) {
      cliente {
        id,
        name,
        dni
      }
    }
  }
`;

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  client: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.client = this.apollo.watchQuery({
      query: GET_CLIENTES,
    }).valueChanges.pipe(
      map((result: any) => {
        console.log("dfghjk");
        console.log(result.data.clientes);
        return result.data.clientes;
      })
    );
    console.log(this.client);
  }
  create(dni: string, name: string, last_name: string, cellphone: string, imei: string) {
    this.apollo.mutate({
      mutation: CREATE_CLIENTES,
      refetchQueries: [{ query: GET_CLIENTES }],
      variables: {
        dni: dni,
        name: name,
        last_name: last_name,
        cellphone: cellphone,
        imei: imei
      }
    }).subscribe(() => {
      console.log('created')
    })
  }
}
