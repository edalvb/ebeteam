import { gql } from 'apollo-angular';

export const GET_DEPARTAMENTOS = gql`
    query {
      departamentos {
        id,
        nombre
      }
    }
`;

export const GET_PROVINCIAS = gql`
    query {
      provincias {
        id,
        nombre
      }
    }
`;

export const GET_DISTRITOS = gql`
    query {
      distritos {
        id,
        nombre
      }
    }
`;
