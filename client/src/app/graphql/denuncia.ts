import { gql } from 'apollo-angular';

export const GET_RECURSOS = gql`
    query {
      recursoDenuncias {
        id
        nombre
      }
    }
`;

export const GET_SERVICIOS = gql`
    query {
      servicios {
        id
        nombre
      }
    }
`;

export const GET_MATERIAS = gql`
    query {
      materiaDenuncias {
        id
        nombre
      }
    }
`;


export const CREATE_DENUNCIA = gql`
    mutation crearDenuncia(
      $idRecurso: ID
      $idCliente: ID
      $direccion: String
      $celular: String
      $email: String,
      $idEO: ID,
      $idServicio: ID,
      $idMateria: ID,
      $idDitrito: ID
    ) {
      createDenuncia(
        input: {
          data: {
            recurso_denuncia: $idRecurso,
            cliente: $idCliente,
            direccion: $direccion,
            celular: $celular,
            email: $email,
            enre: $idEO,
            servicio: $idServicio,
            materia_denuncia: $idMateria,
            estado_denuncia: 2,
            distrito: $idDitrito
          }
        }
      ) {
        denuncia {
          id
        }
      }
    }
`;


export const GET_DENUNCIA_X_CLIENTE = gql`
    query denunciaPorCliente($idCliente: ID!) {
      cliente(id: $idCliente) {
        denuncias {
          created_at,
          direccion,
          celular,
          email,
          enre {
            nombre
          }
          servicio {
            nombre
          }
          materia_denuncia {
            nombre
          }
          estado_denuncia {
            nombre
          }
        }
      }
    }
`;
