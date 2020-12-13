import { gql } from 'apollo-angular';

/**
 * Creas un cliente solo con combre y dni
 */
export const CREATE_CLIENTE_SOLO_DNI = gql`
    mutation crearcliente(
      $dni: String!
      $name: String!
    ) {
      createCliente(
        input: {
          data: {
            nombre: $name
            tipo_persona: 1
            documento_legal: $dni
            tipo_documento_legal: 1
          }
        }
      ) {
        cliente {
          id
          nombre
        }
      }
    }
`;
export const CREATE_CLIENTE = gql`
    mutation crearcliente(
      $dni: String!
      $name: String!
      $email: String
      $direccion: String
    ) {
      createCliente(
        input: {
          data: {
            nombre: $name
            tipo_persona: 1
            documento_legal: $dni
            tipo_documento_legal: 1
            email: $email
            direccion: $direccion
          }
        }
      ) {
        cliente {
          id
          nombre
          email
        }
      }
    }
`;


/**
 * #### Obtener Centros de Clientes
 * Tienes que pasarle una variables `dni: String`. Lo que te devuelve es un objeto.
 */
export const GET_CLIENTE = gql`
    query myCliente($dni: String!) {
      clientes(where: { documento_legal: $dni }) {
        id,
        nombre,
        email,
        direccion,
        celulars {
          id
          numero
        },
        distrito {
          id
          provincia {
            id
            departamento {
              id
            }
          }
        }
      }
    }
`;
