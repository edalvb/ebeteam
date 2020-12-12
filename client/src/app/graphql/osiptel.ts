import { gql } from 'apollo-angular';

export const GET_SEDES_X_DEPARTAMENTO = gql`
    query misSedes($ide: ID!){
      departamento(id: $ide) {
        sedes {
          id,
          nombre,
          direccion,
          celular1,
          celular2,
          telefono,
          email,
          horario,
          ubicacion_latitud,
          ubicacion_longitud
        }
      }
    }
`;
