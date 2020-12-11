import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GetDepartamentos = gql`
  query {
    departamentos {
      id,
      codigo,
      nombre
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor() { }

  getDepartamentos() {



  }

}
